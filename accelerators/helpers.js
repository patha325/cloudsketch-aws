export const node=(id,type,name,x,y,props={})=>({id,type,name,x,y,props});
export const edge=(source,target)=>({id:`${source}-${target}`,source,target});
