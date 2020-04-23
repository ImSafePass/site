import React from "react"

import WaveUpRight from "@images/waves/wave-up-right.svg"
import WomanWithPhone from "@images/mission-walking-phone.svg"

import { group } from "@utils/array"
import content from "@content/mission-content"

const { hero, valueProps, paragraph } = content

const Mission = () => {
  return (
    <div className="page mission">
      <div className="bg--royal-blue pt50--lg">
        <div className="container--small pb70--sm pb30">
          <div className="row flex-col-r--sm">
            <div className="pl50--lg col-6 flex-col center--sm color--white">
              <h1>{hero.title}</h1>
            </div>
            <div className="col-6 mt50--neg--sm mb30--sm ml10--neg--sm mb20--sm">
              <WomanWithPhone className="mt20--lg mb20--sm mh20--lg w400 w300--sm" />
            </div>
          </div>
        </div>
      </div>

      <WaveUpRight className="fill--royal-blue bg--off-white flip-v mb10--neg" />

      <div className="bg--off-white pt120 pt20--sm pb40">
        <div className="container--small">
          <div className="row flex-col flex-ai--fs flex-ai--c--sm">
            <h2 className="color--dark-purple mb20">{paragraph.title}</h2>
            {paragraph.text.split("\n").map((t, i) => (
              <p className="p2" key={i}>
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>

      <WaveUpRight className="fill--off-white flip-h-v bg--transparent" />

      {group(valueProps.bullets, 3).map((group, groupIndex) => (
        <div
          className={`bg--transparent--sm ${
            groupIndex % 2 !== 0 ? "bg--off-white" : ""
          }`}
        >
          <div
            className={`container--only-lg  ${
              groupIndex === 0 ? "mt50--neg--sm" : ""
            }`}
          >
            <div className={`row flex-ai--fs flex-ai--c--sm`} key={groupIndex}>
              {group.map((bullet, index) => {
                const odd = (index + groupIndex) % 2 !== 0
                return (
                  <div
                    key={index}
                    className={`${
                      odd ? "bg--off-white--sm" : ""
                    } bg--transparent w100p pt130 pb150 pv80--sm`}
                  >
                    <div
                      className={`container--narrow center--sm color--black`}
                    >
                      {bullet.image ? (
                        <bullet.image className="mb30 w100p" />
                      ) : null}
                      <h3 className="color--dark-purple pb20">
                        {bullet.title}
                      </h3>
                      <p className="p2">{bullet.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Mission
