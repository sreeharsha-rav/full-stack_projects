import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { merge, Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

export class UserTableDataSource extends DataSource<User>{

  data: User[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {
    super();
    // Fetch data from the backend
    this.subscription.add(this.userService.getAllUsers().subscribe(userList => {
      this.data = userList.users;
      // Notify the table that the data has changed
    }));
  }

  // Connect function called by the table to retrieve one stream containing the data to render.
  connect(): Observable<User[]> {
    if (this.paginator && this.sort) {
      return merge(of(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  // Called when the table is being destroyed. Use this function, to clean up.
  disconnect(): void {
    this.subscription.unsubscribe();
  }

  // Paginate the data (client-side)
  private getPagedData(data: User[]): User[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  // Sort the data (client-side)
  private getSortedData(data: User[]): User[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        default: return 0;
      }
    });
  }

}

// Simple sort comparator for example ID/Name columns (for client-side sorting)
function compare(a: number | string, b: number | string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
