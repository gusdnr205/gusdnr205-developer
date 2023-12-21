import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiWeb3Dotjs, SiExpress, SiSocketdotio, SiMysql, SiPostgresql } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { useState } from 'react'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import ExternalLink from '../components/Link'
import ImageAndVideoSlider from '../components/ImageAndVideoSlider'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()
    const [isShowingModal4, toggleModal4] = useModal()
    const [isShowingModal11, toggleModal11] = useModal()
    const [isShowingModal22, toggleModal22] = useModal()
    const [isShowingModal33, toggleModal33] = useModal()
    const [isShowingModal44, toggleModal44] = useModal()

    const images1 = []
    const videos1 = []
    const images2 = []
    const videos2 = [
        'https://tv.kakao.com/embed/player/cliplink/440704806',
        'https://tv.kakao.com/embed/player/cliplink/440704818',
    ]
    const images3 = [
        'https://blog.kakaocdn.net/dn/EdjR5/btssJlWn9lT/JPXqTJJ0MY1ziltelUGPM1/img.gif',
        'https://blog.kakaocdn.net/dn/leufu/btssLFmVDgQ/ez52BxpwnUcm7qaZYhAQFK/img.gif',
        'https://blog.kakaocdn.net/dn/bjzPsZ/btssDN0DsuB/6NNSLN3SLUkAuFwGKkY2l0/img.gif',
        'https://blog.kakaocdn.net/dn/IonXd/btssLIKId6A/a34gbS8Fp1f3KsaK1pYKd0/img.gif',
        'https://blog.kakaocdn.net/dn/oZF8j/btssNud7i2b/RciIYMxknVPg8IAIfuSzW0/img.gif',
    ]

    const videos3 = ['https://tv.kakao.com/embed/player/cliplink/439153889']
    const images4 = [
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Ft4eCU%2FbtstkxBSFkq%2FhE2SiknUXHQ1ZFtpTBVaJK%2Fimg.png',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvQUsH%2FbtstlfOpIRN%2FYJP6hxaGmwvmK7UptYdvB1%2Fimg.png',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdijoz6%2FbtsteATWumG%2FmioPEPuYFIQlRnarObbP2k%2Fimg.png',
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbeAxyc%2FbtstbdY0Acu%2FR6HC2gFcKghuuvg0gKzSLk%2Fimg.png',
    ]
    const videos4 = []
    return (
        <Wrapper>
            <Heading>프로젝트</Heading>
            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjGBXT%2FbtsBua1kwW0%2FGbTrngR1ZHdCNm8WsCv7vk%2Fimg.png"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 기업협약 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 11 ~ 2023.12</li>
                            <li>back-end</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            바운스 익스플로러(협약프로젝트)
                            <a>팝업 열기</a>
                            <button
                                onClick={toggleModal11}
                                className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                            >
                                <p>
                                    <FaExternalLinkAlt />
                                </p>
                            </button>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            블록체인 네트워크 데이터 보여주는 창구로 과거 데이터와 실시간으로 생성되는 데이터를
                            처리하고보여준다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <SiTypescript />
                            <DiReact />
                            <SiNextdotjs />
                            <SiWeb3Dotjs />
                            <SiExpress />
                            <SiPostgresql />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>web3라이브러리를 이용해 블록체인의 블록데이터 실시간구독,과거데이터 저장을구현했다.</li>
                            <li>
                                세폴리아 테스트넷으로 테스트한결과 실시간으로 처리해야할 데이터가 크다는것을 알고
                                병목현상또는 통신에러날것을 예상했다.
                                <br /> 분산병렬처리를 위해 데이터 수집과정중 블록을 받아올때 queue 를 구현 했다. n
                                길이의 boolean 배열을 만들어서 참이나 거짓이냐에따라 데이터를 queue에서 dequeue해
                                분석요청과 병렬처리에 제한을 두었다.
                            </li>
                            <li>
                                트랜잭션 데이터 내의 from,to 값을 가지고 eoa혹은 ca를 판단했다. 그 과정에서 n:m관계가
                                나올수있음을 알고 중간테이블을 설계햇다.
                            </li>
                            <li>
                                트랜잭션 input값으로 사용된 메서드를 판단하고 해당 CA가 표준모델의 어떤부분에 기인하는지
                                판단을 구현했다.{' '}
                            </li>
                            <li>token ,nft 정보를 수집했다.</li>
                            <li>api설계 및 구현에 일부 관여했다.</li>
                            <li>발표했다.</li>
                        </ul>
                    </div>
                </li>

                {/* 두번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAtsbO%2FbtsBzzrnmty%2FTKQkaNaJPvkLc8B5QMKBW1%2Fimg.png"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 12. 08 ~2023.12.08</li>
                            <li>front-end && back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            IKE 옷 커스텀 <a>팝업 열기</a>
                            <button
                                onClick={toggleModal22}
                                className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                            >
                                <p>
                                    <FaExternalLinkAlt />
                                </p>
                            </button>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            mapple 그리고 nike 사이트를 참고해 만든 사이트로 홈페이지에서 직접 옷을 커스텀하고
                            주문제작에 들어간다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <DiReact />
                            <SiExpress />
                            <SiMysql />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>폴더구성, 회원가입,로그인,마이페이지,장바구니,결제,결제내역을 구현했다.</li>
                            <li>옷 구매 페이지의 개수 관리에 관여했다.</li>
                            <li>localstorage에 장바구니 내역 구현했다.</li>
                            <li>결제 요청, 결제 내역, 결제 취소 등 결제 관련 기능을 import api를 활용해 구현했다.</li>
                        </ul>
                    </div>
                </li>
                {/* 세번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcuBLBN%2FbtsByys0O9h%2FN4IdknbfSGhXQbaeoMVF91%2Fimg.png"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 12. 05 ~ 2023.12.06</li>
                            <li>front-end && back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            모나미(그림 일심동체) <a>팝업 열기</a>
                            <button
                                onClick={toggleModal33}
                                className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                            >
                                <p>
                                    <FaExternalLinkAlt />
                                </p>
                            </button>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            갈틱폰, 캐치마인드 게임의 장점만을 섞은 방식의 게임으로 웹으로 게임을 제공한다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <DiReact />
                            <SiSocketdotio />
                            <SiExpress />
                            <SiMysql />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                git관리 ,socket을 이용한 대기방및 채팅방 구현, socket활용한 실시간 게임진행 구현,aws
                                ec2배포
                            </li>
                            <li>
                                socket을 이용한 대기방 및 채팅방 구현했다. 게임방 입장을 눌러 게임방 입장시
                                socket.room을 활용했다. socket.id를 value로 넣은 유저 방 배열을 생성했다 . 배열로 닉네임
                                매치와 게임방 입장인원 과 room에 있는 유저가 일치하는지 검증했다.
                            </li>
                            <li>
                                게임시작시 특정인원들만 게임시작해야했기에 socket room 인원에게만 게임시작 신호를
                                전달했다.{' '}
                            </li>
                            <li>게인진행에 들어가는 알고리즘 설계 및 구현</li>
                            <li>ec2 배포</li>
                        </ul>
                    </div>
                </li>
                {/* 네번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGw0MV%2FbtsBxWAYwW9%2F7b5cQe04NOiTKXsxAINGKk%2Fimg.png"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 12. 03 ~ 2023.12.04</li>
                            <li>front-end && back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal4}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            My Wallet{' '}
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            바닐라 js를 이용해서 만든프로젝트이다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>폴더및 파일구성 일부 로그인 회원가입 구현</li>
                            <li>
                                시간제한 및 시간 연장 구현 다른페이지로 넘어가도 같은시간이 뜨도록 localstorage에서 같은
                                값을 불러오도록 한다. 시간연장을 누를시 1분씩 시간이 연장되는 기능 구현
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}></Modal>
            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <ImageAndVideoSlider images={images2} videos={videos2} />
            </Modal>
            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <ImageAndVideoSlider images={images3} videos={videos3} />
            </Modal>
            <Modal show={isShowingModal4} onCloseButtonClick={toggleModal4}>
                <ImageAndVideoSlider images={images4} videos={videos4} />
            </Modal>
            <Modal show={isShowingModal11} onCloseButtonClick={toggleModal11}>
                <ExternalLink link="https://www.bouncexplorer.site/" />
            </Modal>
            <Modal show={isShowingModal22} onCloseButtonClick={toggleModal22}>
                <ExternalLink link="https://www.bouncexplorer.site/" />
            </Modal>
            <Modal show={isShowingModal33} onCloseButtonClick={toggleModal33}>
                <ExternalLink link="http://3.39.189.21/main" />
            </Modal>
            <Modal show={isShowingModal44} onCloseButtonClick={toggleModal44}>
                <ExternalLink link="https://www.bouncexplorer.site/" />
            </Modal>
        </Wrapper>
    )
}

export default Projects
