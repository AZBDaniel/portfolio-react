const AboutMe = () => {
    return (
        <div>
            {/*About me Secion*/}
            <section id="about-me">
                <div className="section-title">
                    {/*Side Header*/}
                    <h2>
                        <p>About</p>
                        <p>Me</p>
                    </h2>
                </div>
                {/*About me content*/}
                <div className="section-content box-column">
                    <p>I am currently employed at Device Engineering Inc, which is an aerospace semiconductor design company as a Test Engineer &amp; Qualification Manager. Work tasks include designing custom PCB boards for DEI products, monitoring and improving C+ test code used for biasing DEI devices in production, soldering PCB for production use/ customer evaluation boards, and performing Qualification stress testing on devices to meet industry standards of reliability.
                    </p>
                    <p>I started working for DEI 9 years ago as a tester, during that time I went to school at ITT-Tech to get a degree in Electronic Engineering. After graduating Summa Cum Laude, I was promoted at DEI to an Engineering Tech. Two years into that position I was promoted to Test Engineer, as well as Qualification Manager. As of recently with the COVID-19 changing all schooling to virtual for certain degrees, has given me an opportunity to go back to school and learn another skill.
                    </p>
                    <p>
                        I am currently enrolled at The University of Arizona coding boot-camp, a 6 month program that is accelerated  in teaching coding languages needed for web development front end and back end. After the compilation of the program my hope is to get a job working in the coding industry.
                    </p>
                </div>
            </section>
            {/* end of about me*/}
        </div>
    )
}


export default AboutMe