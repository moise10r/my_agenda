import { v4 as uuidv4 } from 'uuid';
export class Note {
    id: string;
    title: string;
    permissions: string;
    shortDescription: string;
    description: string;
    createdAt: string;
    constructor(title: string, permissions: string, description: string) {
        this.id = uuidv4();
        this.title = title;
        this.permissions = permissions;
        this.description = description;
        this.shortDescription = '';
        this.createdAt = new Date().toISOString();
    }
}
// export the agenda class
export default Note;