function acesso(props) {
    
    const dynamicDateString = new Date().toGMTString();

    
    var acessos = props.acesso.value;
    return (
        <div>
            <div>Data: {dynamicDateString}</div>
            <div>Acessos: {acessos}</div>
        </div>
    )


}

export async function getStaticProps(context) {
    const apiSecret = process.env.COUTER_API_SECRET;
    const res = await fetch(`https://api.countapi.xyz/get/com.mvm/${apiSecret}`)
    //const res = await fetch(`http://localhost:3000/api/v1/access/`)
    
    const data = await res.json()
  
    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: 
      { 
          acesso: data 
      }, // will be passed to the page component as props
      revalidate: 1000
    }
  }

export default acesso;