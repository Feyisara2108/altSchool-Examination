// // types/index.ts
// export interface Todo {
//   id: number;
//   title: string;
//   description?: string;
//   completed: boolean;
//   priority?: 'low' | 'medium' | 'high';
// }

// export interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
//   totalItems: number;
//   itemsPerPage: number;
// }

// export interface TodoItemProps {
//   todo: Todo;
//   onToggle: (id: number) => void;
//   onEdit?: (todo: Todo) => void;
//   onDelete?: (todo: Todo) => void;
// }

// export interface TodoListProps {
//   todos: Todo[];
//   onToggle: (id: number) => void;
//   onEdit: (todo: Todo) => void;
//   onDelete: (todo: Todo) => void;
//   searchTerm?: string;
// }











// // types/index.ts
// export interface Todo {
//   id: number;
//   title: string;
//   description?: string;
//   completed: boolean;
//   priority?: 'low' | 'medium' | 'high';
// }

// export interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
//   totalItems: number;
//   itemsPerPage: number;
// }

// export interface TodoItemProps {
//   todo: Todo;
//   onToggle: (id: number) => void;
//   onEdit?: (todo: Todo) => void;
//   onDelete?: (todo: Todo) => void;
// }

// export interface TodoListProps {
//   todos: Todo[];
//   onToggle: (id: number) => void;
//   onEdit: (todo: Todo) => void;
//   onDelete: (todo: Todo) => void;
//   searchTerm?: string;
// }



// /* -------------------
//    NEWLY ADDED TYPES
// ------------------- */

// // Props for search bar
// export interface SearchBarProps {
//   searchTerm: string;
//   onSearch: (term: string) => void;
// }

// // Props for modal (Create/Edit)
// export interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (todo: Todo) => void;
//   initialData?: Todo; // used for editing
// }

// // Props for confirmation dialog
// export interface ConfirmDialogProps {
//   isOpen: boolean;
//   message: string;
//   onConfirm: () => void;
//   onCancel: () => void;
// }




















// types/index.ts
export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;   // make priority required, consistent with Home.tsx usage
  userId?: number;      // Home.tsx creates new todos with userId
}

/* -------------------
   Filter, Priority, and Form types
------------------- */

export type FilterStatus = 'all' | 'completed' | 'incomplete';

export type Priority = 'low' | 'medium' | 'high';

export interface FormErrors {
  title?: string;
  description?: string;
  [key: string]: string | undefined; // allows for flexible form error keys
}

/* -------------------
   Existing Component Props
------------------- */

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onEdit?: (todo: Todo) => void;
  onDelete?: (todo: Todo) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  searchTerm?: string;
}

/* -------------------
   Optional UI Props
------------------- */

export interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (todo: Todo) => void;
  initialData?: Todo;
}

export interface ConfirmDialogProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}
