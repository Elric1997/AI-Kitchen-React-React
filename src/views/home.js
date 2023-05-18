import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import Verbessern from '../components/verbessern'
import Resteverwertung from '../components/resteverwertung'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AI-Kitchen</title>
        <meta property="og:title" content="AI-Kitchen" />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <h1>AI Kitchen</h1>
        <div className="home-separator"></div>
        <nav className="home-nav">
          <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
        </nav>
        <div data-role="AccordionHeader" className="home-accordion-header">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="home-accordion-content">
          <div className="home-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <span className="home-text01">AI Kitchen</span>
        <h1 className="home-text02">
          Schmecken Sie den Unterschied
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
        <a href="#getstarted" className="home-link button">
          Auf gehts!
        </a>
      </div>
      <div className="home-steps">
        <h1 className="home-text03">Road map</h1>
        <span className="home-text04">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <br></br>
          <span></span>
        </span>
        <div className="home-container01">
          <div className="home-step">
            <div className="home-container02">
              <div className="home-line"></div>
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className="home-line1"></div>
            </div>
            <div className="home-container04">
              <h1 className="home-text07">
                <span>Ideate</span>
              </h1>
              <span className="home-text09">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="home-step1">
            <div className="home-container05">
              <div className="home-line2"></div>
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className="home-line3"></div>
            </div>
            <div className="home-container07">
              <h1 className="home-text12">
                <span>Design</span>
              </h1>
              <span className="home-text14">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="home-step2">
            <div className="home-container08">
              <div className="home-line4"></div>
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className="home-line5"></div>
            </div>
            <div className="home-container10">
              <h1 className="home-text17">
                <span>Develop</span>
              </h1>
              <span className="home-text19">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="home-step3">
            <div className="home-container11">
              <div className="home-line6"></div>
              <div className="home-container12">
                <svg viewBox="0 0 1024 1024" className="home-icon09">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="home-line7"></div>
            </div>
            <div className="home-container13">
              <h1 className="home-text22">
                <span>Deploy</span>
              </h1>
              <span className="home-text24">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <h1 className="home-text27">
          <span>Explore our services</span>
          <br></br>
          <span></span>
        </h1>
        <span className="home-text30">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
            pellentesque nulla leo, sagittis vehicula sem commodo nec.​
          </span>
          <span></span>
        </span>
        <div id="getstarted" className="home-container14">
          <Verbessern rootClassName="verbessern-root-class-name"></Verbessern>
          <Resteverwertung rootClassName="rootClassName3"></Resteverwertung>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-container15">
          <div className="home-container16">
            <h1 className="home-text33">Project Title</h1>
            <span className="home-text34">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="home-container17">
          <div className="home-container18">
            <h1 className="home-text36">Project Title</h1>
            <span className="home-text37">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="home-container19">
          <div className="home-container20">
            <h1 className="home-text39">Project Title</h1>
            <span className="home-text40">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="home-container21">
          <div className="home-container22">
            <h1 className="home-text42">Project Title</h1>
            <span className="home-text43">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="home-container23">
          <div className="home-container24">
            <h1 className="home-text45">Project Title</h1>
            <span className="home-text46">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="home-container25">
          <div className="home-container26">
            <h1 className="home-text48">Project Title</h1>
            <span className="home-text49">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <svg viewBox="0 0 1152 1024" className="home-icon11">
            <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
          </svg>
          <span className="home-text51">Customers</span>
          <span className="home-text52">Lorem ipsum dolor sit amet.</span>
          <h1 className="home-text53">
            <span>50</span>
          </h1>
        </div>
        <div className="home-stat1">
          <svg viewBox="0 0 1024 1024" className="home-icon14">
            <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
          </svg>
          <span className="home-text55">Projects</span>
          <span className="home-text56">Lorem ipsum dolor sit amet.</span>
          <h1 className="home-text57">
            <span>300</span>
          </h1>
        </div>
        <div className="home-stat2">
          <svg viewBox="0 0 1024 1024" className="home-icon16">
            <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
          </svg>
          <span className="home-text59">Cities</span>
          <span className="home-text60">Lorem ipsum dolor sit amet.</span>
          <h1 className="home-text61">
            <span>20</span>
          </h1>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container27">
          <div className="home-logo">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="home-image"
            />
            <span className="home-text63">
              <span>
                <span>
                  Professional website builder
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span>for developers.</span>
            </span>
          </div>
          <div className="home-links-container">
            <div className="home-container28">
              <div className="home-product-container">
                <span className="home-text69">Product</span>
                <span className="home-text70">Features</span>
                <span className="home-text71">Pricing</span>
                <span className="home-text72">Tutorials</span>
                <span>Releases</span>
              </div>
              <div className="home-company-container">
                <span className="home-text74">Company</span>
                <span className="home-text75">About</span>
                <span className="home-text76">Careers</span>
                <span className="home-text77">Contact</span>
                <span>Blog</span>
              </div>
            </div>
            <div className="home-container29">
              <div className="home-contact">
                <span className="home-text79">Contact Us</span>
                <span className="home-text80">hello@teleporthq.io</span>
                <span>+123 (4567) 890</span>
              </div>
              <div className="home-socials">
                <span className="home-text82">Follow Us</span>
                <div className="home-icon-group">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon18"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon22"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-separator1"></div>
        <span className="home-text83">
          <span>© 2021 teleportHQ, All Rights Reserved.</span>
          <span className="home-text85"></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Home
