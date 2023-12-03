export interface TodoType {
  title: string
  completed: boolean
  editable: boolean
}

export interface TodosType extends Array<TodoType> {}
