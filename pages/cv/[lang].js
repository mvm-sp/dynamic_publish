import Image from 'next/image'
import style from './mvm.module.css';
import { useEffect, useState } from "react";
//import { useRouter } from 'next/router'
//import img from './img/in.png'
function uniqueId() {
  let first = (Math.random() * 46656) | 0
  let second = (Math.random() * 46656) | 0
  first = ('000' + first.toString(36)).slice(-3)
  second = ('000' + second.toString(36)).slice(-3)
  return first + second
}

function doSkillType(props, idskilltype){
  return (
    <><p className={style.mvmTextMain}>
      {props.skills.filter((s) => s.idskilltype === idskilltype)[0].skilltypename}
    </p><table >
        <tbody>
          {props.skills.filter((s) => s.idskilltype === idskilltype).map((s) => (
            doSkills(s.skillname, s.level)
          ))}
        </tbody>
      </table></>    
  )
}

function doSkills(skillname,level){
  return ( 
      <tr>
        <td className={style.mvmTextMain}>{skillname}</td>
        <td>
          {Array(level).fill(1).map((c) => (
            <Image
              src='/img/star.png'
              alt="WoW"
              width={30}
              height={30}
            />
          ))}
        </td>
      </tr>

  )
}

function doRegularTable(skillname,level){
  return (
    <><p className={style.mvmTextMain}>
      teste
    </p><table >
        <tbody>
          <tr>
            <td className={style.mvmTextMain}>{skillname}</td>
            <td>
              item
            </td>
          </tr>
        </tbody>
      </table></>
    

   
  )
}
function conteudo(props) {

  const index = (props.idLang === '1' ? 0 : 1)
  
  const useUniqueId = () => {
    const [id, setId] = useState(null)

    useEffect(() => {
        setId(uniqueId())
    }, [])

    return id
  }
  const randonId = useUniqueId()

  return (
    //<html>
    //  <header>MVM</header>
    //  <body>
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
        <div className={style.mvmBox} style={{ width: "500px" }}>
          <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (1 + index))[0].description}</p>
          <div><Image src='/img/local.png' lt="mail" width={15} height={15} /> <span className={style.mvmTextMain}>{props.basic.address}</span></div>
          <div><span className={style.mvmTextMain}>{props.basic.city} - {props.basic.state} - {props.basic.zipcode}</span></div>
          <div><Image src='/img/cel.png' lt="phone and whatsap" width={15} height={15} /> <span className={style.mvmTextMain}>{props.basic.phone}</span></div>
          <div><Image src='/img/email.png' lt="mail" width={15} height={15} /> <span className={style.mvmTextMain}>{props.basic.email}</span></div>
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
        <div style={{ width: "95%" }}>
          <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (3 + index))[0].description}</p>
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
                  <span className={style.mvmTextRegularBold}> {h.notes.split(';').map((t) => (`(#${t})  `))} </span>&nbsp;
                        </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: "95%" }}>
          <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (5 + index))[0].description}</p>
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
        <div style={{ width: "95%" }}>
          <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (9 + index))[0].description}</p>
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
        <div style={{ width: "95%" }} id={randonId}>
          <p className={style.mvmRegularTitle}>{props.sessions.filter((s) => s.id === (7 + index))[0].description}</p>
          <table className={style.mvmRegularTable}>
            <tbody>
              <tr className={style.mvmDivColumn}>
                <td style={{ padding:  "01px 1px 1px 1px"}}>
                  {doSkillType(props,1)
                  //doRegularTable("teste",1)
                }              
                </td>
                <td style={{ padding: "01px 1px 1px 1px" }}>
                  {doSkillType(props,2)
                  //doRegularTable("teste",1)
                  }             
                </td>
                <td style={{ padding: "01px 1px 1px 1px" }}>
                  {doSkillType(props,3)
                  //doRegularTable("teste",1)
                  }              
                </td>
                <td style={{ padding: "01px 1px 1px 1px" }}>
                  {doSkillType(props,4)
                  //doRegularTable("teste",1)
                  }              
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    //  </body>
    //</html>

  )


}

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        lang: 'br'
      }
    }, {
      params: {
        lang: 'en'
      }
    }],
    fallback: 'blocking'
  }
  //fallback ('blocking' / true / false)
}

export async function getStaticProps(context) {

  let idLang = (context.params.lang === 'en' ? '2' : '1');

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
      basic: obj.payload.basic,
      history: obj.payload.history,
      education: obj.payload.education,
      certificates: obj.payload.certificates,
      skills: obj.payload.skills,
      sessions: obj.payload.sessions
    }, // will be passed to the page component as props
    revalidate: 1000
  }
}

export default conteudo;