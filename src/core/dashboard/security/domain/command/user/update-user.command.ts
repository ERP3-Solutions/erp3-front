export interface IUpdateUserCommand {
    userId:string,
    email: string,
    name: string,
    roleIds :[],
    branchIds : []
}