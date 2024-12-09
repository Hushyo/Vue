export interface Course{
    id:string;
    name?:string;
    createTime?:string;
    get?: (a:number)=>void
}
const course1 : Course={id:'12300'}
const course2 : Course={id:'12300'}
export default {course1,course2}