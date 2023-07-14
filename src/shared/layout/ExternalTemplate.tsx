interface IArgs {
    children: JSX.Element;
  }
  
  export default function ExternalTemplate({ children }: IArgs) {
    return (
      <>
      <main>{children}</main>
      </>
    );
  }
  