import * as Tabs from "@radix-ui/react-tabs";
const Login = () => {
    return ( <div className="w-full h-screen items-center justify-center  pt-20">
        <Tabs.Root defaultValue="tab1" className=" flex w-1/4 flex-col  m-auto justify-center rounded-md  ">
            <Tabs.List className="flex shrink-0 border-b border-sabz">
                <Tabs.Trigger value="tab1" className="flex h-[45px] flex-1 cursor-default 
                select-none items-center justify-center  px-5 text-lg font-bold leading-none text-meshki outline-none first:rounded-tl-md last:rounded-tr-md  data-[state=active]:text-meshki border-l-2 border-t-2 border-sabz 
                data-[state=active]:bg-bezh  data-[state=active]:focus:relative">
                    Login
                </Tabs.Trigger>
                <Tabs.Trigger value="tab2" className="flex h-[45px] flex-1 cursor-default 
                select-none items-center justify-center  px-5 text-xl font-bold leading-none text-meshki outline-none first:rounded-tl-md last:rounded-tr-md border-x-2 border-t-2 border-sabz data-[state=active]:text-meshki 
                data-[state=active]:bg-bezh  data-[state=active]:focus:relative">
                    Sign up
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1" className="grow rounded-b-md bg-bezh p-5 outline-none border-x-2 border-b-2 border-sabz">
                <p className="mb-5  font-bold text-xl leading-normal text-meshki">Please Login</p>
                <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                    <label className="mb-2.5 block text-[15px] leading-none text-meshki">username</label>
                    <input type="text" className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-meshki  outline-none border-sabz border-2 bg-kerem"/>
                </fieldset>
                <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                    <label className="mb-2.5 block text-[15px] leading-none text-meshki">password</label>
                    <input type="password" className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-meshki  outline-none border-sabz border-2 bg-kerem"/>
                </fieldset>
                <div className="mt-5 flex justify-end">
                    <button className="inline-flex h-[35px] cursor-default items-center justify-center rounded bg-sabz text-kerem px-[15px] text-[15px] font-medium leading-none outline-none  ">Login</button>
                </div>
            </Tabs.Content>
            <Tabs.Content value="tab2" className="grow rounded-b-md bg-bezh border-x-2 border-b-2 border-sabz p-5 outline-none ">
                <p className="mb-5 font-bold  text-xl leading-normal text-meshki">Please Sign up</p>
                <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                    <label className="mb-2.5 block text-[15px] leading-none text-meshki">username</label>
                    <input type="text" className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-meshki outline-none border-sabz border-2 bg-kerem"/>
                </fieldset>
                <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                    <label className="mb-2.5 block text-[15px] leading-none text-meshki">password</label>
                    <input type="password" className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-meshki  outline-none border-sabz border-2 bg-kerem"/>
                </fieldset>
                <fieldset className="mb-[15px] flex w-full flex-col justify-start">
                    <label className="mb-2.5 block text-[15px] leading-none text-meshki">Confirm password</label>
                    <input type="password" className="h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none text-meshki  outline-none border-sabz border-2 bg-kerem"/>
                </fieldset>
                <div className="mt-5 flex justify-end">
                    <button className="inline-flex h-[35px] cursor-default items-center justify-center rounded bg-sabz text-kerem px-[15px] text-[15px] font-medium leading-none outline-none ">Sign up</button>
                </div>
            </Tabs.Content>
        </Tabs.Root>
        </div>
     );
}
 
export default Login;