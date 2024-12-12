export interface TaskState {
  tasks: TaskGroup;
}

export interface TaskGroup {
  tasksList: TaskList[];
  todoList: TaskList[];
  approvedList: TaskList[];
  rejectedList: TaskList[];
  inProgressList: TaskList[];
}

export interface TaskList {
  id: string;
  color: string;
  title: string;
  chat?: number;
  link?: number;
  stream: string;
  surge?: string;
  report?: string;
  dueDate?: string;
  caurosal?: boolean;
  description: string;
  imageCount?: number;
  status: Status | string;
}

export enum Status {
  todo = "To Do",
  approved = "Approved",
  rejected = "Rejected",
  in_progress = "In Progress",
}
