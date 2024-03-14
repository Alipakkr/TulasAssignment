import React from 'react'
import Header from '../SubComponent/Header'
import styles from "../../styles/page.module.css"
import CardComponent from '../SubComponent/CardComponent'
import CountUp from 'react-countup'
import Footer from '../SubComponent/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <section className={styles.ArticleSection}>
        <div>
          <article>
            <p >
              Our commitment to all-round development shines in diverse extracurricular activities.
            </p>
            <p>( Our Students love that! )</p>
          </article>
          <CardComponent
            heading="Swimming"
            description="22 Acres, Pollution- Free, World-Class."
            source='https://s3-alpha-sig.figma.com/img/0805/aac5/4ba7a2e8b502c70814e51c05d023bce1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwMie0ePzus2aiR9pJUMXZItA6FWFxZCeYs352MxlT3s5ajiaKfPcbooSuju7cB-jMAwH2lsz8neSW2W65RiC72mpkAB2QMzvbmwnQOigCn6zzFXj1qNqSesJ27ZSXsJJN5zKsQybAIREatK2LYvLY4gCEcuM8E7MGMY8bi1hBI6TJOKcJqDXyw5xCeSeAa1CpqMSRBbHLSQgtO6EtNwnFMKvAIviGCZE4Q10VdhY0xhH8-PEUl66IdZQCQvIhT1Vf8z9lOG6-mMQVv2XivqX8gPJMm~~UFjsgAdXKdcn27ME3opFcGz5P4QPzPGaEvWAHyOf8T26K7ZFhba4uu8~Q__'
          />
          <button style={{color:"black"}}>
            SEE ALL ACTIVITIES
            <span style={{color:"RGB(241 180 4)"}} class="material-symbols-outlined">arrow_right_alt </span>
          </button>
         
        </div>
        <div>
          <img src='https://s3-alpha-sig.figma.com/img/bf56/d53b/e4ae8c11aa3b517d3b5f05edfa67ced4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMHpbwP7USeuVo5tcjxx6vEboXa1YAJkPT34MU02u4SmkzJmhqohazql5GYBUAxx~1MCdIvmLbvpI2awK0zMKJdXv6x2V12q0ttTbiTfXk7-GMgMr3RIoRwS6eoYXZXxJMzEAOlREWbbiL47jmI3zePluBDppCkMZPQQk6XFglKzJkB8-Ffj-Qc5ff~YcXdP-7gvwkhzwsKnYEBfEHs3CsURyrpHpdBO8x~nt2hl-7i5WLJI~NOEFFlP9zeyY7a9dPidMymLyzTS4598YL-I22fIsG7UxAzwy05xeyPWQmAbnCBBfwF3l6vXWLWRcyxv1GvbJ5qvSA2VM2wL6EZxOA__' />
        </div>
        <div>
          <CardComponent
            heading="Taekwondo"
            description="22 Acres, Pollution- Free, World-Class."
            source='https://s3-alpha-sig.figma.com/img/f6c9/6040/f9653461eb9b6309e40f102bf5863b7e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daEeT0vzcucrZD7ZMzkM90bIM7bP7sUK8OlfQXFPMGKYj7u3WzRgyrSroM76ov9vPkDrDj37ERVHPTthrdeoFmJWFh89hJNsIa~hS5TZqzLzu-9PN~12Wk26IcngvFcYWzT6CEmRVsclFGIJvByXK~U1j6yRBtZzGn7Qv-EZVNoYZ0uA-mrwkuip1piZVQ7iXJ-5dJ8iuYEEQggH0tzbkfesFyMB9z-LG25tJ7BHDc4r9yYwM3mw-Per8zy4NTC8uiJpdvYHbQ3jyV3jGuDl6d8bDF4bpQtQR-Q2eO-i4Pbb6~v6WW6Mm8jj6gZL-QQjZDJJeyoOTFMQv6N~DrOMEQ__'
          />
          <CardComponent
            heading="Horse Riding"
            description="22 Acres, Pollution- Free, World-Class."
            source='https://s3-alpha-sig.figma.com/img/4e0a/c460/2c0383f400220dcb63e7c93c7e04b629?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5TrP94pPaUA8~e0LDL5Td3ECiGjji-Y1e5ReSqyKlyzRhp27py4SRXrcTyierP~Du-XLAL1eblvjpwFP5bLIp7m-ApH01641XGNHUSoXXS~U12ubvyurWYYsNnV1J-q9lUxDJWIZ06uy3j58Ak4k-c-ch5COOtcDmniHlbLgiT~TpfTHysYp7I67SwDj0trndKtq7CH69pTA-Pkgxs3OXyG6IizFfFhbX4tpuPyXyc8LEf-gQgVYAvf2KTUC8TXrPsqXHVhhZn-T6fi-VrMXZnzTw0qxMGoVLUgQs6fXM8C2G4cB6bfjujDCfSqDci9s7pB8mTt~8C5iWFxsWNzww__'
          />
        </div>
      </section>
      <section className={styles.VideoSection}>
        <div style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/a28b/9f5f/b3c65245636894337842651c84e28ada?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGIdhsECkBBA6ZEicDZNtsLwhOeEprV62dk061u6lL-N0kAVQj1Z9D~OjRTApZrpmA-wwdW9bvnHixg~wN5CFhIIUlwq~wqJj~vvPHSOgmvKjS5TeEYP7aRQrAhqjNzqVXUar7ZDCQfsyxl5jOktszJDPMQoi3YnqrQNiIM-5lSpZzv89OcK5u5B9qB6FF6nTnb2Jy7Zh~WbS6ZEMbm~8OuC~D-HrTrwsuzKvWFcCKs7WSKK3HufvRfFBqsr66-lfj55GBuLxP2kurAZs219F3hfsR6QDAXLqhz1fTBsoRv3e~StxwhVWg8bljDGNrxSJ5wsPGtwjNk-zNX2-XNBCQ__)` }}>
          <div>
            <span class="material-symbols-outlined">
              smart_display
            </span>
          </div>
        </div>
      </section>
      <section className={styles.TestimonySection}>
        <div>
          <img src='https://s3-alpha-sig.figma.com/img/fa23/ede2/89a9dcfcc8953ab542e1ecec581ce3ff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dqN79bwL6O~IG7kBSamKa1~ScfRBv7PFKNscaIXNHQpq2RZOnGW-DYBwyIOL45NZr3bJWZdj6pq4hEOewwwAz3BNA-YaGjWzXVzsBv25Sp07KT9M8Lyhq2-cNDIkL6WRovWthu~hlJSY8pG8oOP4X0aelh26zPmGo-iwEZD4ZbEhTy4EUas8x2fPlxIIiJVL4U7LcHc9X0O7G5Oj6yTGP7w3uDJh3DWVfaiVtWDJggboIV9jMt-CwP80zgtIdGY2dBFf0UPzSatB-ZUs1eCVHW~Kyy7ONSju7Dbznhu29RUMwu1j5y7pMSrz6vcUOk3v2~pTW2LSk3O7MmlyBAd99A__' />
        </div>
        <div>
          <h3>At Tula’s, we ask, “How can we make school better?”</h3>
          <p>Using the latest research on how girls learn best, we designed an innovative modular schedule, personalized for each student. Our girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying here. Develop leadership skills, build compassion, gain responsibility, and prepare to change the world.</p>
          <button style={{color:"black"}}>
            LEARN MORE
            <span style={{color:"RGB(241 180 4)"}} class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </section>
      <section className={styles.QuestionSection}>
        <h1>Why <span >TIS?</span></h1>
        <div>
          <h3>A FOCUS ON...</h3>
          <h3>MANAGEMENT</h3>
          <p style={{color: "#202833",

fontFamily: "TT Chocolates",
fontSize: "25px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "normal",
paddingRight: "138px"}}>
            Extremely Friendly and Approachable Management. Tula’s International School combines – respect for tradition with a progressive application of modern sciences, academic rigour with a caring heart, and individual appreciation with the warmth of a school community
          </p>
        </div>
        <div>
          <img src='https://s3-alpha-sig.figma.com/img/9bdc/ca4b/4b5601dd8eab0cabe738f612b9d33640?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgJ9119CEKKzHZTi-lYNRwD6dLjYKYMnOFRFtqQEcn7LVlUVSIH1AFkjOc-fJFV2QDSAGmA-1k2Y~UEyyqJWBjlzYr7ERiXr3FcePAuR4zBVELKvepydY9XQf0QQhVKJDyRaS05E0rrQTtZMd89SioQ-kyXQDIjWmnVPTNYBIeXh8uw7q~pkMUr0L2FqdS9l5nTAWraCK-ZMdzK3XG9J7gwglG5bf9VT6qW5Me1ogd9BHxwDRKwxYHa-v7~CtWFHCy6bSjIWvSh5I5dYkZlud8lRQAyDtldmhXq9KlPq3e5P4K--LoY2k~OPARFPAD0WVH6zVylvM5fteg5j0hReTg__' />
          <ul>
            <li>
              <img src='https://s3-alpha-sig.figma.com/img/77f9/bc6e/5811a01f394a65776cc7f426d045d15f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=loXrwgcZ-imGAfn4YmqxbFcJnx5W3vVAfwRYwML-AtKlkBhXxg0505ODqkjfCCBGf05P1Stdtoj34Je-lIafe5vXr00b7YaXKc-k2KNs4Q4KzZoQlSaYmr2vamzf1N57j5QGXOA77RrD4sPeFGPSKcWDy6yO7bFkoYUYv1Oyi4d32u-yCd1NrRnfLbslt2T6giYRqA9jH~yFQygqNO0Q5fpLziGzbiHhbM3igpeEE0jKApE80SIalVpLAIkL8aKRfRcSNwXalsjIheaar7fbSUhOZ4BOoveg8FzGpPL37GkykYaSGc1THN0i4xPfkZvQPUOE4IKwduvn~~g85ddwRg__' />
              <p>CAMPUS</p>
            </li>
            <li>
              <img src='https://s3-alpha-sig.figma.com/img/dc82/637c/3e7f30309977bf3c50a186dcd7b1ff28?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dGOWS34pySbqkS3u7-NiuGfiqGLgu46SXqB3eLb9cg1dKCjVJPvc4nUD4gB6xy~XmSHh4nAoTu94Exj6o6Tj6GgxESmDbQUcoZS-ruXsCNYygRNFHWeYqvc4ZIzVVy5KPld5wCdVPxwFF26jrggLOk6TSYY2wojz86O53ydXLcOyEnThslUR2xFXRNGaigueckHUo2QZh7XohFkzGoRixgMEiKz-B39F-s-0b3JBzRXjDMZSOfes~CU88wcRrBpf7jsXn4Cq0F-vnPtUYTwI4R3sGwOKUD2CaWr3A2f8DCr43mx9Xp-HJZJOw4fxcko5P8fiCTHCGFysLQ3aekIVaw__' />
              <p>EXPERT INSTRUCTION</p>
            </li>
            <li>
              <img src='https://s3-alpha-sig.figma.com/img/4fdd/87e5/1a2007ca80441bcc92b2a322536b9e4c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8iLc8AuOOcBqbv240BXKLuSfTa--xa2aMkwAW07FnrGevFr-cSopGAZNiHLrYS~pybM9Zz8OB0ConcC8MDUdVmeDVquuJNp8h3mfXftluVfifQfBUvmLpsSQfARjFCBzLheBEPzX4QMyQ0PPZq8h3eaTail-s7dhadrsPBbG-yI9cdaljL0~cSrsP2Mc-UxyR~G0iyLWDcxR8~~KuQUAtwNLxmamK8C4NMT-n3DO7Et~nWQMWdUbo~IPXf2YksFYaAlk6IzjRdsXEQLDM~ZGTjcmKhw19kTfoXlzLd7gHGZB0o2xQAxRZVOjFAuqrnXqPrsxdmpYUVakw3HvmRQ1A__' />
              <p>TRAINING METHODS</p>
            </li>
            <li>
              <img src='https://s3-alpha-sig.figma.com/img/3a18/94a3/cdf8b79a8ca45ddf0117d225082d2cdc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1uDWgbMGZkOlnq83Gvgt3EX8oTt5592P8C2r6NN5oWPPExoZ-j~We67GjMGhatom93PeknIO5k-woLzsHoggFFINkwn0yJnxIk9EDGIViddhMR~IFcHezWa~Af-ZmUccDocJOYcGux0DUVpk37qYfJl-uAnUHOwdY~HEwTuZ7UXsfs1aadlDNTNtdSXOQG6EbIMbiTrPQJ~fhHh3hTmSx~MwLfWZSxsp4ozcbIr91fwLdN0hzFeVKi3QD5BE-4Xk5amtOzp9bl8bkV8rLKSaVBKK9a16F0FfzzvmAbzMBTlndyU-ZN11P1hFQOCyQm6WEMmcB-gTFQX8F~r~nuhfA__' />
              <p>RATIO</p>
            </li>
            <li>
              <img src='https://s3-alpha-sig.figma.com/img/34f9/3223/4c9f918b32066b23c51c3cf0a99f6d8a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QnAv0CGRPJaaZZD5bG01fP8e3yyzy9T4ruMPhDQdgGn79S5qT4pX7gqfxv20d3-6bjFU6zVQhf9dA3eskE1oANlqAFXTK8H39gmLKM7SzUuHTjSEZFW5E197xvjoJ~fMb0BexFy46lHLnNx03v54LU4GDqSE9kc1-qna053JRNooAT1aw51OJeeeylx9AE0nAMM4xMdukKuW16bseP0Z7ZTswX~LxPIqddaC3OGiAYG-3qoQND7TempNsuEcmWHwwJv3-nr5a6Q7RbtYOumJnIPWcRIkFnoN~Fp6TqdwCtB2108DnLP2dehMcMQR6s4ZEFxB6zC3976-KqiAs4dVUw__' />
              <p>MANAGEMENT</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.ReportSection}>
        <div style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/7cf4/46c5/f6e6d5ff663185ebfe4c11e8dc6be6ac?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fD7r~93HJUxi-fQsSxBsqt5FM3ocF~BEOfeiQ~7r0iDqNAW5KkvOtS1vEpoQi8~NGLrkPZLgN-eXnzfU9itpZe1m7WQEpS2B4aaWMSowtEfZcglXruUyrhxaAI2q08LD5dC91J42yBUVowSZWMP2J6hkt7-aAAskj3kZwSPx3JOtKBdjEoPKHpnwVuth0-JH0Va~D3wCq9ZEXc2lW5P8pXlgIjaa7sLrz9GJn09TY45up67pnKLj9-UzrqZKvfwPK~KQ-cvR~eou3NFLgAIxH9~iQgNib32OWyKLLsLzg3c10srr1VTnNR15lQzNRgZp9gTIXs5ledj-qvlwXJJf0g__)' }}>
          <img src='https://s3-alpha-sig.figma.com/img/8187/6eca/bf05a2072f3b706ad72b30d96eba0a0b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xz4o~5PXe6pr7tS0f7DU2kzUUNy11nxS0k58r51jZ3HCwILW3vTrEq896IBEoO8MHuZIIKu0Vie6T63Njuf~j-iJrO5jgaRP1gzukKZdjX4epvjp2ZowPP0Mng~RvlvxaBWR1-rOTKPgwF80F-m8ulrF572HBvpPoSKwLiqpiYdoWrE3ytp4IzVLaqmXo11UlHrNM8-yTdpPcvdfdX-SuG4L69tcsn3DX3kG2nilrsulZyWOudy692FT~xZyjnX5cPoK-GS53asvmujDEXo8iLnZDJYRqb6DWavPrQuMF7ps3UZl06m7uvWppiOFDVhaoTbRe9rWFREHblIo5Cj-Lg__' />
          <div>
            <h3>DIVINE INTO OUR...</h3>
            <h3>VIRTUAL TOUR</h3>
          </div>
        </div>
        <div>
          <div>
            <CountUp
              end={100}
              suffix='%'
            />
            <p>College Acceptance</p>
          </div>
          <div>
            <CountUp
              end={20}
            />
            <p>Years of Educational Excellence</p>
          </div>
          <div>
            <CountUp
              end={60}
              suffix='%'
            />
            <p>STEM Program Participation</p>
          </div>
          <div>
            <CountUp
              end={15}
              suffix='+'
            />
            <p>Extracurricular Activities</p>
          </div>
        </div>
      </section>
      <section className={styles.ArticleSection} style={{ flexDirection: 'row-reverse', paddingTop: 0 }}>
        <div>
          <article>
            <p>
              Awards and achievements, gleaming in sight, Honor efforts and perseverance in flight.
            </p>
            <p> (Everybody Loves that) </p>
          </article>
          <CardComponent
            heading="Best Residential School in Uttarakhand, India"
            source='https://s3-alpha-sig.figma.com/img/2090/e719/9ec1b8f4862bbdb65a5dc0798dd7b81b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OgvviyY3VYwy3VZXhadnPmAk2y7sm8YI5yXAnslFkM-u5WpoC4CS~rw~A1oUzxRZpGzW~0zg6SxrLmSVvylbNNrbMAoR5EDIiT1JZayOGNsk~hVA~UlhaftE2-ZV0IuOTUc5ZlSOoGu2s~0nkaw4g8AaI02LnRkYNVLGwcqDfmQ-zLj05NfkvnEgWYpocgCviuwg7SJCF6UWuYxpbro0JMptVQRiLfwHIKVtPdJ~Lt5Y~NRghPuBM1g2t8ezys~FkpODSoW6AtQzFrEhQLCyCzwzeMOdpOgjVWxmrFyI4WnqNJ6noyykUBYwkGxUDeq~QKAXaqsm-CwDnPU1BDiA0Q__'
          />
          <button style={{color:"black"}}>
            SEE ALL ACTIVITIES
            <span style={{color:"RGB(241 180 4)"}} class="material-symbols-outlined">arrow_right_alt </span>
          </button>
        </div>
        <div>
          <img src='https://s3-alpha-sig.figma.com/img/bf56/d53b/e4ae8c11aa3b517d3b5f05edfa67ced4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMHpbwP7USeuVo5tcjxx6vEboXa1YAJkPT34MU02u4SmkzJmhqohazql5GYBUAxx~1MCdIvmLbvpI2awK0zMKJdXv6x2V12q0ttTbiTfXk7-GMgMr3RIoRwS6eoYXZXxJMzEAOlREWbbiL47jmI3zePluBDppCkMZPQQk6XFglKzJkB8-Ffj-Qc5ff~YcXdP-7gvwkhzwsKnYEBfEHs3CsURyrpHpdBO8x~nt2hl-7i5WLJI~NOEFFlP9zeyY7a9dPidMymLyzTS4598YL-I22fIsG7UxAzwy05xeyPWQmAbnCBBfwF3l6vXWLWRcyxv1GvbJ5qvSA2VM2wL6EZxOA__' />
        </div>
        <div>
          <CardComponent
            heading="Top Boarding School in Uttarakhand, India"
            source='https://s3-alpha-sig.figma.com/img/1b56/a70d/a83140ce1a61c66dfcd90d8a5689b94a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jEsyipHoIhX7TJOOZFdO3Z~ejJPQwOTS-DQCsn0vXw-twNcP4hePYQ7MdhOx~QFawZsKhvpyumdJFT3pOxW3ymHrF78WeVaWBNSxmrEt8ST5GhmSmqPs-gTVW9bM1e9dgZSi5YrEqv3VGf0ek-ObnVBUHwBLFvvICWY1zVvOptkEhGL31S9-gEzNq3yK6Z1OFbRmv7uFEXBIevX6-zeoocI3bJ~6zdG2jIIi8TTs3TIrXG3geUCS8ARQv6DwbvCOMPZiP-iBqvC5XaQOCNzqwLCOyXW9fAVbExr9AHXS0zlDn7V0MnZdQhEYR6hjk0GSEfzEz9cQcL1fJnwX4ItrgA__'
          />
          <CardComponent
            heading="International School Award, India 2019"
            source='https://s3-alpha-sig.figma.com/img/61b5/c276/bc9709f7431373bf6017f0cd846dce95?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jH8wGahMBbuyu842KOEVMj~L2nPWnPq-VmG4uSmswmQ4x~vWZJDXMcX60dq0rcAEkjWxL9CdK3Kaz~6D8qjwQW9hCXnypa1G4S~5pMHKpVbUpIA5Mi~Exhy5~jc6OXvFjvk8UYDrW1O0AIdb5QIzJLLfGV0G9EgoSj07mPzi9zHtpDL6b4Oy8cIKJE14gun2-9rNyLvKTc-pjRlsWX1jyHY3TMJocD5-yXDNomOodSiV5DWmB2aN6AodJkk2-~ygWkArPSjuBYbUoVddcQJK8aBSbn-oU-zLXaYUDmnk9yVVFWT6SBVTQAPVqBgrxdT4Nz3W8K91xOA-6sHdJU2Vhg__'
          />
        </div>
      </section>
      <section className={styles.RankingSection}>
        <div>
          <img src='https://s3-alpha-sig.figma.com/img/4919/b499/08fe1bd4370e05cf7e9c3fb03f5e4802?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RkPF6JNqeufyXec9ORMC-Tj36emxWRZ2TvpMCUoEb5Yqf1O7qPvrUmIBIbDfZwRlJOCrm0ZmktSzwAeCYmA5gLI9i1lkM7lPCtga54SGXJjlb5jX0TyRBMUjkkDnWJInfnLcDqCcP4vuosbFo2xZWicBWuie5rEJKjtxSBplc4zaAr~HaOo-UDeeIcOptmdHolKrmrmY-qvgpdMFnXfeZL4yllLd6VE-O5FaZnWsyj6A339plINfEgpzDmNM9NFkG3DSO6LXSxAAutRxq4TsO40J-xuWveJyMrTyom1uwq4nGSRqH-caaIqevHljErpvX39jMJ9Gh83OECXMDFxGaw__' />
          <h3>Our Rankings</h3>
          <p>Top Boarding School</p>
        </div>
        <div>
          <img src='https://s3-alpha-sig.figma.com/img/b332/5e07/fb54eeb0afffaef00a8ee35212e1e47b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=htGHUiHhjA6IHQJvOKHwl4sko6gkyUVqv5LsoVoNfCfD6Jw1bKIvl6W0ksb66RPPenqHTVb3WyHxNBH~Od9vWILqD33gY8TF1vnTEVJUUM9GcRMjPrN3i8QynKeEFwFpgukdiXk2QDEcMBXtZvjGh878PKXVOZwC~Rovg~Qju0KGmj2u~7SA5ugwPE-fbaFfts8bEIXiAOD-nciyHQZoFKPZCR48qJxrjwg-9D4wxQvod2gleh1rtDjw0-D4FC1jG8iM0C3khlI0ZzfucqifLZ-84RrJqVrzxNAHRruGRzF-HUaS7RLEB4HQJ2VibJhiThDhxg5ZJtjn8epKw2cIBA__' />
        </div>
        <div>
          <h2>#1</h2>
          <h3>In Dehradun</h3>
          <p>Co-Educational Boarding School in Dehradun by Education Today 2020</p>
        </div>
        <div>
          <h2>#2</h2>
          <h3>In Uttarakhand</h3>
          <p>Co-Educational Boarding School in North India by Education Today 2020</p>
        </div>
        <div>
          <h2>#3</h2>
          <h3>In India</h3>
          <p>Co-Educational Boarding School in India by Education Today 2020</p>
        </div>
      </section>
      <section className={styles.ParentsSection}>
        <div>
          <h1>From The</h1>
          <h1>Parents</h1>
          <img src="https://s3-alpha-sig.figma.com/img/161a/0b8e/45d8653303538ec3ac3354826b2e6782?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dEt5vXfuC~v1YXB8Qfm8Njw0iCFN6txt~YECSVwsNmNn8YvZhZlER04M~cTMKYfEb1FBfmTJbq7jVOnMwWH0TB3oegEGy5Fh2zmdTuafOmK2qMLpZUkB~kFRkTqexH-tkRYS9spLHcDFQ~BbyjjfAgtMiyhKJL4BcE3IXo0w4CvG-0uSUE0q77yTPgeBcu45Xt0pZkQibZXsV0NKBbY2sWafRfQPImBysOfWybIPd757ZYs99ib-zPUGspcf0FaRiKiEY2FAo7Qkau12lgj4rkidQcHSyRI5jxNlJA4IKD3Xz68kG0KXsCTY7pgtFWcCDsiu5IUsJOHeOLru6x66LA__" style={{
            width: "59px",
            height: "61px",
            display: "flex"
          }} />
          <  hr />
          <p style={{
            color: "#000",
            fontFamily: "TT Chocolates Trl",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: " 0.6px"
          }}>What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive to their unique needs, providing the support and encouragement necessary for their academic success. </p>
        </div>
        <div>
          <div style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/392c/29fe/e4d43468a1452bed17fbfca8c86b428f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gppbA51q8U33hhsiX7rzCDjyqX7c58xFsK16EgwCoN4XdZ4VI-BeMdHrU5SawW5BX82ixqsKsFvnm9Unq6EAtdOipHWQDGP7GXVjyBm6HHIp-g6yk7LF~T0a-9TWPHzIZ3KpToENRiO2f9p7W1Xf83fGviJ0aIiy7yWv10Dt3KpdLpJ~akiQINvnWvE~etWBzmvjnOdun73Pe8JaAzCwV3-PJKntw6rqbYkPfqzqQVGkyznbT7cNbBVMWq3fbgHaHRvyHu-SD0fYgFzPZf9WbUA1G8ci8BVvR9gV~faipWbjPb7Hd54d-Kh0zqMPNKMt2SLJ8RFGKLhxGL0k9y3CDQ__)' }}>
            <span class="material-symbols-outlined">
              smart_display
            </span>
          </div>
          <div></div>
        </div>
      </section>
      <Footer />
    </div >
  )
}