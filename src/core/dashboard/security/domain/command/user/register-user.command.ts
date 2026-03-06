export interface IRegisterUserCommand {
    name:string,
    lastName:string,
    email:string,
    password:string,
    roleIds :[],
    branchIds : []
}