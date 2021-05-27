import Image from 'next/image'
import style from './mvm.module.css';
//import img from './img/in.png'


function conteudo(props) {
    
    const dynamicDateString = new Date().toGMTString();

    
    //var name = props.name.payload[0].name;
    //console.log(props.conteudo.payload[0].name);
    return (
        <div className={style.mvmMain}>
            <div className={style.mvmDivColor}>
              <div><span className={style.mvmName}>{props.basic.name}</span></div>
              <span className={style.mvmObjective}>{props.basic.description}</span>
            </div>
            <div className={style.mvmBox} style={{width:"500px"}}>
              <p className={style.mvmRegularTitle}>Contato</p>		
              <div><Image src='/img/local.png' lt="mail" width={15} height={15}/> <span className={style.mvmTextMain}>{props.basic.address}</span></div>
              <div><span className={style.mvmTextMain}>{props.basic.city} - {props.basic.state} - {props.basic.zipcode}</span></div>
              <div><Image src='/img/cel.png' lt="phone and whatsap" width={15} height={15}/> <span className={style.mvmTextMain}>{props.basic.phone}</span></div>
              <div><Image src='/img/email.png' lt="mail" width={15} height={15}/> <span className={style.mvmTextMain}>{props.basic.email}</span></div>
              <div>
                <a href={props.basic.urllinkedin}>
                <Image
                  src='/img/in.png'
                  alt="visit my linkekin profile"
                  width={30}
                  height={30}
                /></a> &nbsp;&nbsp;
                <a href={props.basic.urlgithub}>
                  <Image
                  src='/img/git.png'
                  alt="visit my git repository"
                  width={30}
                  height={30}
                />
                </a>
              </div>
              
            </div>
        </div>
    )


}

export async function getStaticProps(context) {
    let res = await fetch(`${process.env.URL_CV_BASE}resume/1/1`)

    const obj = await res.json()

    if (!obj) {
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
          basic: obj.payload.basic 
      }, // will be passed to the page component as props
      revalidate: 1000
    }
  }

export default conteudo;