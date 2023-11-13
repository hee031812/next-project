import React from 'react'
import { siteText } from '../constants'

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <div className="site__title">
                    Site Coding <em>나의 작업물</em>
                </div>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <div className={`site__item s${key + 1}`} key={key} >
                            <span className="num">{key + 1}. </span>
                            <div class="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 class="title">
                                {site.title}
                            </h3>
                            <div class="btn">
                                <a href="#">{site.code}</a>
                                <a href="#">{site.view}</a>
                            </div>
                            <div class="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Site