import Image from 'next/image'
import style from './mvm.module.css';
//import { useRouter } from 'next/router'
//import img from './img/in.png'

function conteudo(props) {
    
    const index = (props.idLang === '1' ? 0 : 1)
    
    return (
        <div className={style.mvmMain}>
            <div>
                <a target="_self" href={"./br"}  >
                <Image
                  src='/img/br.png'
                  alt="visit my linkekin profile"
                  width={30}
                  height={30}
                /></a> &nbsp;&nbsp;
                <a target="_self" href={"./en"}>
                  <Image
                  src='/img/en.png'
                  alt="visit my git repository"
                  width={30}
                  height={30}
                />
                </a>
            </div>
            <div className={style.mvmDivColor}>
              <div><span className={style.mvmName}>{props.basic.name}</span></div>
              <span className={style.mvmObjective}>{props.basic.description}</span>
            </div>
            <div className={style.mvmBox} style={{width:"500px"}}>
              <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (1+index))[0].description}</p>		
              <div><Image src='/img/local.png' lt="mail" width={15} height={15}/> <span className={style.mvmTextMain}>{props.basic.address}</span></div>
              <div><span className={style.mvmTextMain}>{props.basic.city} - {props.basic.state} - {props.basic.zipcode}</span></div>
              <div><Image src='/img/cel.png' lt="phone and whatsap" width={15} height={15}/> <span className={style.mvmTextMain}>{props.basic.phone}</span></div>
              <div><Image src='/img/email.png' lt="mail" width={15} height={15}/> <span className={style.mvmTextMain}>{props.basic.email}</span></div>
              <div>
                <a target="_blank" href={props.basic.urllinkedin}  >
                <Image
                  src='/img/in.png'
                  alt="visit my linkekin profile"
                  width={30}
                  height={30}
                /></a> &nbsp;&nbsp;
                <a target="_blank" href={props.basic.urlgithub}>
                  <Image
                  src='/img/git.png'
                  alt="visit my git repository"
                  width={30}
                  height={30}
                />
                </a>
              </div>
            </div>
            <div  style={{width:"95%"}}>
             <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (3+index))[0].description}</p>	
                {props.history.map((h) => (
                  <div>
                    <div><p className={style.mvmMidTitle}>{h.role}</p></div>
                    <div>
                      <span className={style.mvmTextMain}>{h.company}</span>&nbsp;|&nbsp;
                      <span className={style.mvmTextMain} >{h.periodbegin}&nbsp;-&nbsp; 
                      <span className={style.mvmTextMain}>{h.periodend}</span></span>
                    </div>
                    <div className={style.mvmBox} >
                      <span className={style.mvmTextRegular}>{h.description}</span>&nbsp;
                      <div >
                        <span className={style.mvmTextRegular}> Tags: </span>
                        <span className={style.mvmTextRegularBold}> {h.notes.split(';').map((t)=> (`(#${t})  `)) } </span>&nbsp;
                      </div>
                    </div>
                  </div>   
                ))}
            </div>      
            <div  style={{width:"95%"}}>
             <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (5+index))[0].description}</p>	
                {props.education.map((e) => (
                  <div>
                    <div><p className={style.mvmMidTitle}>{e.course}</p></div>
                    <div>
                      <span className={style.mvmTextMain}>{e.school}</span>&nbsp;|&nbsp;
                      <span className={style.mvmTextMain} >{e.periodbegin}&nbsp;-&nbsp; 
                      <span className={style.mvmTextMain}>{e.periodend}</span></span>
                    </div>
                    <div className={style.mvmBox} >
                      <span className={style.mvmTextRegular}>{e.description}</span>&nbsp;
                    </div>
                  </div>   
                ))}
            </div>   
            <div  style={{width:"95%"}}>
             <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (9+index))[0].description}</p>	
                {props.certificates.map((c) => (
                  <div>
                    <div><p className={style.mvmMidTitle}>{c.title}</p></div>
                    <div>
                      <span className={style.mvmTextMain}>{c.company}</span>&nbsp;|&nbsp;&nbsp;
                      <span className={style.mvmTextMain} >{c.emission_date}</span>
                    </div>
                    <div >
                      <span className={style.mvmTextRegular}>{c.notes}</span>&nbsp;
                    </div>
                  </div>   
                ))}
            </div>                
            <div  style={{width:"95%"}}>
             <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (7+index))[0].description}</p>	
             <table className={style.mvmRegularTable} >
               <tr className={style.mvmDivColumn}>
                 <td style={{padding: "00px 25px 0px 25px"}}>
                  <p className={style.mvmTextMain}>{props.skills.filter((s) => s.idskilltype === 1)[0].skilltypename}</p>	
                  <table >    
                      {props.skills.filter((s) => s.idskilltype === 1).map((s) =>( 
                        <tr>
                          <td className={style.mvmTextMain}>{s.skillname}</td>&nbsp;
                            <td>
                            {Array(s.level).fill(1).map((c) => (
                                <Image
                                src='/img/star.png'
                                alt="WoW"
                                width={30}
                                height={30}
                              />
                            ))}
                            </td>
                          </tr>
                      ))}
                  </table>
                </td>
                <td style={{padding: "00px 25px 0px 25px"}}>
                  <p className={style.mvmTextMain}>{props.skills.filter((s) => s.idskilltype === 2)[0].skilltypename}</p>	
                  <table >    
                      {props.skills.filter((s) => s.idskilltype === 2).map((s) =>( 
                        <tr>
                          <td className={style.mvmTextMain}>{s.skillname}</td>&nbsp;
                            <td>
                            {Array(s.level).fill(1).map((c) => (
                                <Image
                                src='/img/star.png'
                                alt="WoW"
                                width={30}
                                height={30}
                              />
                            ))}
                            </td>
                          </tr>
                      ))}
                  </table>
                </td>
                <td style={{padding: "00px 25px 0px 25px"}}>
                  <p className={style.mvmTextMain}>{props.skills.filter((s) => s.idskilltype === 3)[0].skilltypename}</p>	
                  <table >    
                      {props.skills.filter((s) => s.idskilltype === 3).map((s) =>( 
                        <tr>
                          <td className={style.mvmTextMain}>{s.skillname}</td>
                            <td>
                            {Array(s.level).fill(1).map((c) => (
                                <Image
                                src='/img/star.png'
                                alt="WoW"
                                width={30}
                                height={30}
                              />
                            ))}
                            </td>
                          </tr>
                      ))}
                      
                    </table>
                  </td>
                </tr>
              </table>
            </div> 
                        
        </div>
    )


}

export async function getStaticPaths() {
  return {
      paths: [{
          params: {
              lang: 'br'
          }
      },{
          params: {
              lang: 'en'
          }
      }],
      fallback: 'blocking' 
  }
  //fallback ('blocking' / true / false)
}

export async function getStaticProps(context) {

    let idLang = (context.params.lang==='en'? '2':'1');
    
    const URL_Back = `${process.env.URL_CV_BASE}resume/1/${idLang}`

    let res = await fetch(URL_Back)

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
          idLang: idLang,
          basic: obj.payload.basic ,
          history: obj.payload.history,
          education: obj.payload.education,
          certificates: obj.payload.certificates,
          skills:obj.payload.skills,
          sessions:obj.payload.sessions
      }, // will be passed to the page component as props
      revalidate: 1000
    }
  }

export default conteudo;