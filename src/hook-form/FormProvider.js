import { FormProvider as Form } from "react-hook-form";
// import 

function FormProvider({children,onSubmit,methods}) {
    return ( <Form {...methods} >
        <form onSubmit={onSubmit}>
            {children}
        </form>
    </Form> );
}

export default FormProvider;