/*
 * Interface for the response of the topic
 * id: number - the unique identifier for the topic
 * name: string - the name of the topic
 * description: string - the description of the topic
 */
export interface TopicResponse {
    id: number;
    name: string;
    description: string;
}