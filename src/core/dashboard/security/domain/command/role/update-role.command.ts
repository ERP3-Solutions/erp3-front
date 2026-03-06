export interface IUpdateRoleCommand{
    roleId:string;
    name:string;
    description:string;
    permissionCodes:[];
}