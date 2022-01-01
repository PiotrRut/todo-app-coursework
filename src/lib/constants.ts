export enum AppRoutes {
  Login = '/login',
  SignUp = '/create-account',
  Dashboard = '/dashboard',
  Home = '/',
}

export enum ApiRoutes {
  Login = '/auth/login',
  SignUp = '/auth/register',
  GetTodos = '/todo/todos',
  CreateTodo = '/todo/new',
  UpdateTodo = '/todo/edit',
  DeleteTodo = '/todo/delete',
  GetTags = '/tag/tags',
  GetSingleTag = '/tag',
  CreateTag = '/tag/new',
  UpdateTag = '/tag/edit',
  DeleteTag = '/tag/delete',
}
