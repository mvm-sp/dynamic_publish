import style from  './cv.module.css'

function Home() {
    return (<div>
        <div className={style.cvbody}>
        <iframe className={style.cvframe}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEeSoGYzEQ&#x2F;view?embed">
        </iframe>
        </div>
        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEeSoGYzEQ&#x2F;view?utm_content=DAEeSoGYzEQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">CVCanva</a> de Marcelo Marcondes
    </div>)
}

export default Home