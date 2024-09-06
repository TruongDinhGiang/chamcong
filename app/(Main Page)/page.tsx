'use client';
import Image from 'next/image';

import Congty from '@/public/Images/main/congty.png';
import DesignIcon from '@/public/Images/main/DesignIcon.png';
import PrintIcon from '@/public/Images/main/PrintIcon.png';
import SewingIcon from '@/public/Images/main/SewingIcon.png';
import Logo from '@/public/Images/LOGO CTY.png';
import { BalooPaaji2 } from '../ui/Style/Font/fonts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const baseColor = '#00699d';
const borderBaseColor = 'border-[#239cd480]';
const bgBaseColorHover = 'hover:bg-[#239cd480]';

const footerColor = '#002e5c';

export default function Page() {
	return (
		<>
			<div id="content" className="my-24 mx-24 py-8 bg-zinc-100 rounded-md">
				<div id="interBox" className="px-8 gap-y-32 flex flex-col">
					<div id="introduction" className="grid grid-cols-[1fr_1fr] grid-rows-1 gap-x-12">
						<Image alt="Ảnh công ty" src={Congty} />
						<div className="flex flex-col gap-y-5">
							<div className="flex gap-x-4 items-center">
								<svg
									className="w-[35%] h-auto"
									width="48"
									height="7"
									viewBox="0 0 48 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M1 6H47" stroke={baseColor} stroke-linecap="round" />
									<path
										d="M2.24483 3.28184C2.20995 3.31038 2.16239 3.33416 2.10215 3.35318C2.04508 3.37221 1.9785 3.38172 1.9024 3.38172C1.80411 3.38172 1.72167 3.36904 1.65509 3.34367C1.5885 3.31831 1.5457 3.2755 1.52668 3.21526C1.41887 2.91405 1.32692 2.66356 1.25083 2.46381C1.1779 2.26406 1.12083 2.09126 1.07961 1.94541H1.05583C1.04632 2.14516 1.03839 2.32747 1.03205 2.49235C1.02571 2.65722 1.02095 2.81893 1.01778 2.97746C1.01461 3.13282 1.00986 3.29136 1.00352 3.45306C0.997175 3.61476 0.987663 3.79232 0.97498 3.98573C0.940103 3.99524 0.892543 4.00634 0.8323 4.01902C0.775228 4.03171 0.718156 4.03805 0.661084 4.03805C0.540599 4.03805 0.445479 4.01744 0.375724 3.97622C0.30914 3.935 0.275848 3.86366 0.275848 3.7622C0.275848 3.69245 0.279019 3.5894 0.28536 3.45306C0.294872 3.31355 0.304384 3.15502 0.313896 2.97746C0.326579 2.79673 0.337676 2.60649 0.347188 2.40674C0.359871 2.20699 0.372553 2.01041 0.385236 1.817C0.401089 1.62041 0.415357 1.43969 0.42804 1.27481C0.453405 1.23676 0.504136 1.19872 0.580232 1.16067C0.656328 1.11945 0.76096 1.09884 0.894128 1.09884C1.03681 1.09884 1.15095 1.12262 1.23656 1.17018C1.32534 1.21457 1.38875 1.28908 1.4268 1.39371C1.47436 1.50786 1.52509 1.64102 1.57899 1.79322C1.63289 1.94224 1.68521 2.09443 1.73594 2.24979C1.78984 2.40198 1.83899 2.53991 1.88338 2.66356H1.90716C1.99593 2.38455 2.0863 2.11187 2.17825 1.84553C2.27337 1.5792 2.35422 1.35725 2.4208 1.17969C2.46519 1.15433 2.52068 1.1353 2.58726 1.12262C2.65702 1.10677 2.72994 1.09884 2.80604 1.09884C2.94238 1.09884 3.05177 1.11945 3.1342 1.16067C3.21981 1.19872 3.27054 1.25737 3.2864 1.33664C3.29908 1.39688 3.31176 1.492 3.32444 1.622C3.3403 1.752 3.35615 1.9026 3.372 2.07382C3.38786 2.24187 3.40371 2.41942 3.41956 2.60649C3.43542 2.79039 3.44969 2.97112 3.46237 3.14868C3.47822 3.32306 3.4909 3.48001 3.50042 3.61952C3.50993 3.75903 3.51627 3.87 3.51944 3.95244C3.47188 3.98098 3.42115 4.00159 3.36725 4.01427C3.31652 4.03012 3.25152 4.03805 3.17225 4.03805C3.07079 4.03805 2.9836 4.01902 2.91067 3.98098C2.84092 3.94293 2.80287 3.87 2.79653 3.7622C2.78067 3.51489 2.76799 3.28026 2.75848 3.05831C2.74897 2.83319 2.74104 2.62869 2.7347 2.44479C2.73153 2.25772 2.72677 2.0976 2.72043 1.96443H2.69665C2.65543 2.10077 2.59678 2.27357 2.52068 2.48284C2.44775 2.68893 2.35581 2.95527 2.24483 3.28184ZM6.33529 2.85856C6.33529 3.10587 6.28456 3.32148 6.1831 3.50538C6.08481 3.6861 5.9453 3.82561 5.76457 3.9239C5.58384 4.02219 5.37141 4.07134 5.12727 4.07134C4.88629 4.07134 4.67386 4.02378 4.48996 3.92866C4.30923 3.83037 4.16814 3.69086 4.06668 3.51013C3.96839 3.32623 3.91924 3.10904 3.91924 2.85856C3.91924 2.60808 3.96997 2.39406 4.07143 2.2165C4.17289 2.03577 4.31399 1.89626 4.49472 1.79797C4.67862 1.69651 4.88947 1.64578 5.12727 1.64578C5.36824 1.64578 5.57909 1.69651 5.75981 1.79797C5.94054 1.89626 6.08164 2.03736 6.1831 2.22126C6.28456 2.40198 6.33529 2.61442 6.33529 2.85856ZM5.12727 2.20223C4.97824 2.20223 4.85934 2.2593 4.77057 2.37345C4.68496 2.48759 4.64215 2.6493 4.64215 2.85856C4.64215 3.07099 4.68496 3.23428 4.77057 3.34843C4.85617 3.4594 4.97507 3.51489 5.12727 3.51489C5.27946 3.51489 5.39836 3.45782 5.48397 3.34367C5.56957 3.22953 5.61238 3.06782 5.61238 2.85856C5.61238 2.65247 5.56957 2.49235 5.48397 2.3782C5.39836 2.26089 5.27946 2.20223 5.12727 2.20223ZM5.33177 1.29859L5.113 1.03226C5.03373 1.12421 4.96556 1.20189 4.90849 1.2653C4.85142 1.32554 4.78959 1.3953 4.72301 1.47456C4.6152 1.47456 4.52801 1.4492 4.46143 1.39847C4.39801 1.34774 4.36631 1.28432 4.36631 1.20823C4.36631 1.15116 4.38216 1.10201 4.41387 1.06079C4.44557 1.01957 4.49155 0.968842 4.55179 0.9086L4.74203 0.708848C4.7991 0.654946 4.85617 0.612142 4.91325 0.580436C4.97349 0.548729 5.04324 0.532876 5.12251 0.532876C5.19861 0.532876 5.26677 0.547144 5.32702 0.57568C5.39043 0.604216 5.46019 0.664458 5.53628 0.756408L5.88823 1.18445C5.88823 1.26371 5.86445 1.3303 5.81689 1.3842C5.7725 1.4381 5.70433 1.46505 5.61238 1.46505C5.55531 1.46505 5.50457 1.45078 5.46019 1.42225C5.41897 1.39054 5.37616 1.34932 5.33177 1.29859ZM5.50775 4.66108C5.50775 4.76572 5.47287 4.85291 5.40311 4.92266C5.33336 4.99559 5.23982 5.03205 5.12251 5.03205C5.01154 5.03205 4.91959 4.99559 4.84666 4.92266C4.77691 4.85291 4.74203 4.76572 4.74203 4.66108C4.74203 4.55328 4.77691 4.4645 4.84666 4.39475C4.91959 4.32499 5.01154 4.29012 5.12251 4.29012C5.23982 4.29012 5.33336 4.32499 5.40311 4.39475C5.47287 4.4645 5.50775 4.55328 5.50775 4.66108ZM6.78295 2.74442H7.48208V3.25331C7.48208 3.34209 7.51062 3.40709 7.56769 3.4483C7.62476 3.48952 7.70561 3.51013 7.81024 3.51013C7.8578 3.51013 7.90853 3.50538 7.96244 3.49586C8.01951 3.48318 8.06707 3.46891 8.10512 3.45306C8.13048 3.4816 8.15268 3.51647 8.1717 3.55769C8.19389 3.59891 8.20499 3.64647 8.20499 3.70037C8.20499 3.80817 8.1606 3.89695 8.07182 3.96671C7.98305 4.03646 7.83402 4.07134 7.62476 4.07134C7.35842 4.07134 7.15075 4.0111 7.00172 3.89061C6.85587 3.77013 6.78295 3.57355 6.78295 3.30087V2.74442ZM7.23001 2.31162V1.76944H8.14316C8.15902 1.7948 8.17487 1.83126 8.19072 1.87882C8.20658 1.92638 8.2145 1.9787 8.2145 2.03577C8.2145 2.13089 8.19231 2.20065 8.14792 2.24504C8.1067 2.28943 8.04963 2.31162 7.9767 2.31162H7.23001ZM7.48208 2.86332H6.78295V1.15591C6.81465 1.1464 6.85904 1.13689 6.91612 1.12738C6.97319 1.11469 7.03343 1.10835 7.09684 1.10835C7.23318 1.10835 7.33147 1.13213 7.39172 1.17969C7.45196 1.22725 7.48208 1.31445 7.48208 1.44127V2.86332ZM10.8199 2.20699C10.6487 2.20699 10.5013 2.26406 10.3776 2.3782C10.2571 2.48918 10.1969 2.65247 10.1969 2.86807C10.1969 3.08051 10.2556 3.24063 10.3729 3.34843C10.4902 3.45623 10.6376 3.51013 10.8152 3.51013C10.9198 3.51013 11.0102 3.49745 11.0863 3.47208C11.1655 3.44355 11.2337 3.41343 11.2908 3.38172C11.3447 3.41977 11.3859 3.46257 11.4144 3.51013C11.443 3.55452 11.4572 3.61001 11.4572 3.67659C11.4572 3.79391 11.3938 3.88903 11.267 3.96195C11.1402 4.03488 10.9642 4.07134 10.7391 4.07134C10.4886 4.07134 10.2682 4.02695 10.078 3.93817C9.88776 3.84622 9.74033 3.70988 9.63569 3.52916C9.53106 3.34843 9.47875 3.12807 9.47875 2.86807C9.47875 2.59222 9.53582 2.36552 9.64996 2.18796C9.76411 2.00724 9.91471 1.87248 10.1018 1.7837C10.292 1.69175 10.4981 1.64578 10.7201 1.64578C10.9388 1.64578 11.1101 1.68541 11.2337 1.76468C11.3605 1.84395 11.4239 1.94224 11.4239 2.05955C11.4239 2.11662 11.4097 2.16894 11.3811 2.2165C11.3558 2.26089 11.3257 2.30052 11.2908 2.3354C11.2305 2.30369 11.1608 2.27516 11.0815 2.24979C11.0054 2.22126 10.9182 2.20699 10.8199 2.20699ZM14.0936 3.02978H13.385V2.60649C13.385 2.46064 13.3469 2.35759 13.2708 2.29735C13.1979 2.23394 13.1044 2.20223 12.9902 2.20223C12.8888 2.20223 12.7968 2.22126 12.7144 2.2593C12.6351 2.29735 12.567 2.34016 12.5099 2.38772L12.4909 1.817C12.5638 1.77578 12.6541 1.73773 12.7619 1.70285C12.8697 1.6648 12.9886 1.64578 13.1186 1.64578C13.4199 1.64578 13.6577 1.72346 13.832 1.87882C14.0064 2.03102 14.0936 2.26089 14.0936 2.56844V3.02978ZM11.9106 2.74442H12.6145V3.99524C12.5828 4.00476 12.5384 4.01268 12.4813 4.01902C12.4243 4.02854 12.3624 4.03329 12.2959 4.03329C12.1627 4.03329 12.0644 4.00951 12.001 3.96195C11.9407 3.91439 11.9106 3.82878 11.9106 3.70513V2.74442ZM13.385 2.74442H14.0936V3.99524C14.0619 4.00476 14.0175 4.01268 13.9605 4.01902C13.9034 4.02854 13.8416 4.03329 13.775 4.03329C13.6386 4.03329 13.5388 4.00951 13.4753 3.96195C13.4151 3.91439 13.385 3.82878 13.385 3.70513V2.74442ZM12.6145 3.11063H11.9106V0.903844C11.9392 0.894332 11.982 0.88482 12.039 0.875308C12.0961 0.865796 12.1579 0.86104 12.2245 0.86104C12.3609 0.86104 12.4591 0.88482 12.5194 0.93238C12.5828 0.97994 12.6145 1.06713 12.6145 1.19396V3.11063ZM14.646 3.11063V2.7682H15.3499V3.10587C15.3499 3.25172 15.3864 3.35635 15.4593 3.41977C15.5354 3.48318 15.6416 3.51489 15.778 3.51489C15.8636 3.51489 15.9349 3.50696 15.992 3.49111C16.049 3.47525 16.0919 3.4594 16.1204 3.44355V2.7682H16.829V3.52916C16.829 3.60525 16.8132 3.67025 16.7815 3.72415C16.7529 3.77805 16.7054 3.82561 16.6388 3.86683C16.5373 3.93025 16.4121 3.97939 16.2631 4.01427C16.1172 4.05232 15.9539 4.07134 15.7732 4.07134C15.5481 4.07134 15.3499 4.03805 15.1787 3.97146C15.0107 3.90488 14.8791 3.80183 14.784 3.66232C14.692 3.51964 14.646 3.33575 14.646 3.11063ZM16.829 2.98222H16.1204V1.72663C16.1521 1.71712 16.1965 1.70761 16.2536 1.6981C16.3106 1.68858 16.3725 1.68383 16.439 1.68383C16.5754 1.68383 16.6737 1.70761 16.7339 1.75517C16.7973 1.79956 16.829 1.88675 16.829 2.01675V2.98222ZM15.3499 2.98222H14.646V1.72663C14.6746 1.71712 14.7174 1.70761 14.7744 1.6981C14.8315 1.68858 14.8933 1.68383 14.9599 1.68383C15.0963 1.68383 15.1946 1.70761 15.2548 1.75517C15.3182 1.79956 15.3499 1.88675 15.3499 2.01675V2.98222ZM15.583 1.01799L16.0586 0.499584C16.2012 0.499584 16.309 0.53129 16.382 0.594704C16.4549 0.654947 16.4914 0.723116 16.4914 0.799212C16.4914 0.865796 16.4771 0.921283 16.4486 0.965672C16.42 1.01006 16.3725 1.06079 16.3059 1.11786L15.8541 1.5031C15.7336 1.5031 15.6416 1.47456 15.5782 1.41749C15.5148 1.35725 15.4831 1.29384 15.4831 1.22725C15.4831 1.1892 15.491 1.15433 15.5069 1.12262C15.5227 1.09091 15.5481 1.05604 15.583 1.01799ZM17.3818 2.74442H18.0809V3.25331C18.0809 3.34209 18.1094 3.40709 18.1665 3.4483C18.2236 3.48952 18.3044 3.51013 18.4091 3.51013C18.4566 3.51013 18.5074 3.50538 18.5613 3.49586C18.6183 3.48318 18.6659 3.46891 18.7039 3.45306C18.7293 3.4816 18.7515 3.51647 18.7705 3.55769C18.7927 3.59891 18.8038 3.64647 18.8038 3.70037C18.8038 3.80817 18.7594 3.89695 18.6706 3.96671C18.5819 4.03646 18.4328 4.07134 18.2236 4.07134C17.9572 4.07134 17.7496 4.0111 17.6005 3.89061C17.4547 3.77013 17.3818 3.57355 17.3818 3.30087V2.74442ZM17.8288 2.31162V1.76944H18.742C18.7578 1.7948 18.7737 1.83126 18.7895 1.87882C18.8054 1.92638 18.8133 1.9787 18.8133 2.03577C18.8133 2.13089 18.7911 2.20065 18.7467 2.24504C18.7055 2.28943 18.6484 2.31162 18.5755 2.31162H17.8288ZM18.0809 2.86332H17.3818V1.15591C17.4135 1.1464 17.4579 1.13689 17.5149 1.12738C17.572 1.11469 17.6323 1.10835 17.6957 1.10835C17.832 1.10835 17.9303 1.13213 17.9905 1.17969C18.0508 1.22725 18.0809 1.31445 18.0809 1.44127V2.86332ZM21.9752 1.66956C22.0735 1.66956 22.1544 1.69175 22.2178 1.73614C22.2844 1.77736 22.3176 1.8487 22.3176 1.95016C22.3176 2.00724 22.3018 2.09601 22.2701 2.2165C22.2384 2.33699 22.1956 2.47649 22.1417 2.63503C22.0909 2.79356 22.0339 2.95527 21.9705 3.12014C21.907 3.28501 21.8436 3.44038 21.7802 3.58623C21.7168 3.72891 21.6597 3.84781 21.609 3.94293C21.5741 3.96829 21.5186 3.99049 21.4425 4.00951C21.3664 4.03171 21.2824 4.0428 21.1905 4.0428C21.0827 4.0428 20.9891 4.02854 20.9099 4C20.8338 3.97146 20.7799 3.92707 20.7482 3.86683C20.7133 3.80025 20.6705 3.70671 20.6198 3.58623C20.569 3.46574 20.5151 3.3294 20.458 3.17721C20.401 3.02185 20.3439 2.86173 20.2868 2.69686C20.2298 2.53198 20.1774 2.37345 20.1299 2.22126C20.0823 2.06906 20.0443 1.9359 20.0157 1.82175C20.057 1.78053 20.1093 1.74566 20.1727 1.71712C20.2393 1.68541 20.3106 1.66956 20.3867 1.66956C20.485 1.66956 20.5658 1.69017 20.6293 1.73139C20.6927 1.77261 20.7387 1.85029 20.7672 1.96443L20.9812 2.72064C21.0066 2.80941 21.0319 2.89819 21.0573 2.98697C21.0858 3.07575 21.1112 3.15819 21.1334 3.23428C21.1556 3.31038 21.1746 3.37538 21.1905 3.42928H21.2095C21.2856 3.17246 21.3617 2.89819 21.4378 2.60649C21.517 2.31162 21.5868 2.02467 21.647 1.74566C21.7422 1.69493 21.8516 1.66956 21.9752 1.66956ZM24.4928 0.699336L24.1218 0.271296C24.125 0.182517 24.1519 0.114348 24.2027 0.0667879C24.2566 0.0160571 24.3152 -0.00930829 24.3786 -0.00930829C24.442 -0.00930829 24.4959 0.00654502 24.5403 0.0382517C24.5847 0.0667877 24.6259 0.108006 24.664 0.161908L24.9636 0.59946C24.9509 0.672385 24.9208 0.727872 24.8732 0.76592C24.8257 0.800797 24.775 0.818236 24.7211 0.818236C24.6767 0.818236 24.637 0.808724 24.6022 0.7897C24.5673 0.767505 24.5308 0.737384 24.4928 0.699336ZM23.0232 3.19148L22.9946 2.71588L24.1741 2.5304C24.1678 2.44162 24.1297 2.35918 24.06 2.28308C23.9902 2.20699 23.8872 2.16894 23.7508 2.16894C23.6082 2.16894 23.4893 2.21809 23.3941 2.31638C23.299 2.4115 23.2483 2.54783 23.2419 2.72539L23.2657 3.05356C23.2943 3.22794 23.3688 3.35318 23.4893 3.42928C23.6097 3.50221 23.7524 3.53867 23.9173 3.53867C24.0505 3.53867 24.1757 3.51964 24.293 3.4816C24.4103 3.44355 24.5055 3.40391 24.5784 3.3627C24.6259 3.39123 24.664 3.43087 24.6925 3.4816C24.7242 3.53233 24.7401 3.58623 24.7401 3.6433C24.7401 3.73842 24.702 3.81769 24.6259 3.8811C24.553 3.94451 24.45 3.99207 24.3168 4.02378C24.1868 4.05549 24.0378 4.07134 23.8697 4.07134C23.6256 4.07134 23.4052 4.02537 23.2086 3.93342C23.0152 3.84147 22.863 3.70354 22.7521 3.51964C22.6411 3.33575 22.5856 3.10587 22.5856 2.83002C22.5856 2.6271 22.6173 2.45113 22.6807 2.30211C22.7473 2.15309 22.8345 2.03102 22.9423 1.9359C23.0533 1.83761 23.1769 1.76468 23.3133 1.71712C23.4528 1.66956 23.5971 1.64578 23.7461 1.64578C23.9649 1.64578 24.1551 1.69017 24.3168 1.77895C24.4817 1.86456 24.6101 1.98187 24.702 2.13089C24.794 2.27991 24.84 2.45271 24.84 2.6493C24.84 2.74759 24.813 2.8221 24.7591 2.87283C24.7052 2.92356 24.6307 2.95527 24.5356 2.96795L23.0232 3.19148ZM23.9696 1.29859L23.7508 1.03226C23.6716 1.12421 23.6034 1.20189 23.5463 1.2653C23.4893 1.32554 23.4274 1.3953 23.3608 1.47456C23.253 1.47456 23.1658 1.4492 23.0993 1.39847C23.0358 1.34774 23.0041 1.28432 23.0041 1.20823C23.0041 1.15116 23.02 1.10201 23.0517 1.06079C23.0834 1.01957 23.1294 0.968842 23.1896 0.9086L23.3799 0.708848C23.4369 0.654946 23.494 0.612142 23.5511 0.580436C23.6113 0.548729 23.6827 0.532876 23.7651 0.532876C23.838 0.532876 23.9046 0.547144 23.9649 0.57568C24.0283 0.604216 24.098 0.664458 24.1741 0.756408L24.5261 1.18445C24.5261 1.26371 24.5039 1.3303 24.4595 1.3842C24.4151 1.4381 24.3453 1.46505 24.2502 1.46505C24.1963 1.46505 24.1472 1.45078 24.1028 1.42225C24.0584 1.39054 24.014 1.34932 23.9696 1.29859ZM26.296 1.98821H27.0189V3.99524C26.9903 4.00476 26.9444 4.01268 26.881 4.01902C26.8175 4.02854 26.7525 4.03329 26.686 4.03329C26.5433 4.03329 26.4418 4.00793 26.3816 3.9572C26.3245 3.90647 26.296 3.81769 26.296 3.69086V1.98821ZM27.0189 2.90136H26.296V1.10835C26.3277 1.10201 26.3752 1.09408 26.4386 1.08457C26.5052 1.07506 26.5686 1.0703 26.6289 1.0703C26.7684 1.0703 26.8683 1.09408 26.9285 1.14164C26.9888 1.1892 27.0189 1.27957 27.0189 1.41274V2.90136ZM28.07 1.98821H28.7976V3.99524C28.7659 4.00476 28.7184 4.01268 28.6549 4.01902C28.5915 4.02854 28.5265 4.03329 28.4599 4.03329C28.3173 4.03329 28.2158 4.00793 28.1556 3.9572C28.0985 3.90647 28.07 3.81769 28.07 3.69086V1.98821ZM28.7976 2.90136H28.07V1.10835C28.1048 1.10201 28.154 1.09408 28.2174 1.08457C28.2808 1.07506 28.3442 1.0703 28.4076 1.0703C28.544 1.0703 28.6423 1.09567 28.7025 1.1464C28.7659 1.19396 28.7976 1.28432 28.7976 1.41749V2.90136ZM28.4837 2.83954H26.6241V2.26406H28.4837V2.83954ZM29.3872 1.06079C29.3872 0.952989 29.4237 0.862625 29.4966 0.7897C29.5727 0.716775 29.6678 0.680312 29.782 0.680312C29.8993 0.680312 29.9944 0.716775 30.0673 0.7897C30.1402 0.862625 30.1767 0.952989 30.1767 1.06079C30.1767 1.16542 30.1402 1.25579 30.0673 1.33188C29.9944 1.40798 29.8993 1.44603 29.782 1.44603C29.6678 1.44603 29.5727 1.40798 29.4966 1.33188C29.4237 1.25579 29.3872 1.16542 29.3872 1.06079ZM29.43 2.74442H30.1339V3.99524C30.1054 4.00476 30.0626 4.01268 30.0055 4.01902C29.9484 4.02854 29.8866 4.03329 29.82 4.03329C29.6837 4.03329 29.5838 4.00951 29.5204 3.96195C29.4601 3.91439 29.43 3.82878 29.43 3.70513V2.74442ZM30.1339 3.11063H29.43V1.74566C29.4586 1.73614 29.5014 1.72663 29.5584 1.71712C29.6187 1.70761 29.6821 1.70285 29.7487 1.70285C29.885 1.70285 29.9833 1.72663 30.0435 1.77419C30.1038 1.81858 30.1339 1.90577 30.1339 2.03577V3.11063ZM32.4142 0.413976L32.7471 -0.00930829C32.8645 -0.00930829 32.9516 0.0160571 33.0087 0.0667879C33.0658 0.117518 33.0943 0.17459 33.0943 0.238004C33.0943 0.288735 33.0816 0.334709 33.0563 0.375928C33.0309 0.413976 32.9929 0.458365 32.9421 0.509096L32.6425 0.818236C32.5474 0.818236 32.4713 0.796041 32.4142 0.751652C32.3603 0.707263 32.3334 0.656532 32.3334 0.59946C32.3334 0.567753 32.3397 0.537632 32.3524 0.509096C32.3651 0.48056 32.3857 0.448853 32.4142 0.413976ZM31.035 3.19148L31.0064 2.71588L32.1859 2.5304C32.1796 2.44162 32.1415 2.35918 32.0718 2.28308C32.002 2.20699 31.899 2.16894 31.7626 2.16894C31.62 2.16894 31.5011 2.21809 31.4059 2.31638C31.3108 2.4115 31.2601 2.54783 31.2538 2.72539L31.2775 3.05356C31.3061 3.22794 31.3806 3.35318 31.5011 3.42928C31.6216 3.50221 31.7642 3.53867 31.9291 3.53867C32.0623 3.53867 32.1875 3.51964 32.3048 3.4816C32.4221 3.44355 32.5173 3.40391 32.5902 3.3627C32.6378 3.39123 32.6758 3.43087 32.7043 3.4816C32.736 3.53233 32.7519 3.58623 32.7519 3.6433C32.7519 3.73842 32.7138 3.81769 32.6378 3.8811C32.5648 3.94451 32.4618 3.99207 32.3286 4.02378C32.1986 4.05549 32.0496 4.07134 31.8815 4.07134C31.6374 4.07134 31.417 4.02537 31.2205 3.93342C31.0271 3.84147 30.8749 3.70354 30.7639 3.51964C30.6529 3.33575 30.5974 3.10587 30.5974 2.83002C30.5974 2.6271 30.6291 2.45113 30.6925 2.30211C30.7591 2.15309 30.8463 2.03102 30.9541 1.9359C31.0651 1.83761 31.1888 1.76468 31.3251 1.71712C31.4646 1.66956 31.6089 1.64578 31.7579 1.64578C31.9767 1.64578 32.1669 1.69017 32.3286 1.77895C32.4935 1.86456 32.6219 1.98187 32.7138 2.13089C32.8058 2.27991 32.8518 2.45271 32.8518 2.6493C32.8518 2.74759 32.8248 2.8221 32.7709 2.87283C32.717 2.92356 32.6425 2.95527 32.5474 2.96795L31.035 3.19148ZM31.9814 1.29859L31.7626 1.03226C31.6834 1.12421 31.6152 1.20189 31.5581 1.2653C31.5011 1.32554 31.4392 1.3953 31.3727 1.47456C31.2649 1.47456 31.1777 1.4492 31.1111 1.39847C31.0477 1.34774 31.016 1.28432 31.016 1.20823C31.016 1.15116 31.0318 1.10201 31.0635 1.06079C31.0952 1.01957 31.1412 0.968842 31.2014 0.9086L31.3917 0.708848C31.4488 0.654946 31.5058 0.612142 31.5629 0.580436C31.6231 0.548729 31.6945 0.532876 31.7769 0.532876C31.8498 0.532876 31.9164 0.547144 31.9767 0.57568C32.0401 0.604216 32.1098 0.664458 32.1859 0.756408L32.5379 1.18445C32.5379 1.26371 32.5157 1.3303 32.4713 1.3842C32.4269 1.4381 32.3571 1.46505 32.262 1.46505C32.2081 1.46505 32.159 1.45078 32.1146 1.42225C32.0702 1.39054 32.0258 1.34932 31.9814 1.29859ZM33.2938 3.11063V2.7682H33.9977V3.10587C33.9977 3.25172 34.0342 3.35635 34.1071 3.41977C34.1832 3.48318 34.2894 3.51489 34.4258 3.51489C34.5114 3.51489 34.5827 3.50696 34.6398 3.49111C34.6968 3.47525 34.7396 3.4594 34.7682 3.44355V2.7682H35.4768V3.52916C35.4768 3.60525 35.461 3.67025 35.4293 3.72415C35.4007 3.77805 35.3532 3.82561 35.2866 3.86683C35.1851 3.93025 35.0599 3.97939 34.9109 4.01427C34.765 4.05232 34.6017 4.07134 34.421 4.07134C34.1959 4.07134 33.9977 4.03805 33.8265 3.97146C33.6584 3.90488 33.5269 3.80183 33.4317 3.66232C33.3398 3.51964 33.2938 3.33575 33.2938 3.11063ZM35.4768 2.98222H34.7682V1.72663C34.7999 1.71712 34.8443 1.70761 34.9014 1.6981C34.9584 1.68858 35.0203 1.68383 35.0868 1.68383C35.2232 1.68383 35.3215 1.70761 35.3817 1.75517C35.4451 1.79956 35.4768 1.88675 35.4768 2.01675V2.98222ZM33.9977 2.98222H33.2938V1.72663C33.3224 1.71712 33.3652 1.70761 33.4222 1.6981C33.4793 1.68858 33.5411 1.68383 33.6077 1.68383C33.7441 1.68383 33.8423 1.70761 33.9026 1.75517C33.966 1.79956 33.9977 1.88675 33.9977 2.01675V2.98222ZM37.0388 1.94065L37.6951 1.93114C37.7078 2.06748 37.7173 2.20223 37.7236 2.3354C37.73 2.46857 37.7331 2.59698 37.7331 2.72064C37.7363 2.84429 37.7379 2.96478 37.7379 3.08209V4C37.7094 4.00634 37.6634 4.01268 37.6 4.01902C37.5397 4.02854 37.4779 4.03329 37.4145 4.03329C37.275 4.03329 37.1767 4.00951 37.1196 3.96195C37.0657 3.91439 37.0388 3.82878 37.0388 3.70513V1.94065ZM39.5737 3.16294L38.9126 3.1677C38.8904 2.93624 38.8778 2.71588 38.8746 2.50662C38.8714 2.29735 38.8698 2.0976 38.8698 1.90736V1.10835C38.9015 1.10201 38.9475 1.09408 39.0077 1.08457C39.068 1.07506 39.1314 1.0703 39.198 1.0703C39.3343 1.0703 39.431 1.09567 39.4881 1.1464C39.5452 1.19396 39.5737 1.27798 39.5737 1.39847V3.16294ZM39.5737 2.93466V2.47332V3.90964C39.5325 3.94768 39.4738 3.97781 39.3977 4C39.3248 4.02537 39.2376 4.03805 39.1362 4.03805C39.0284 4.03805 38.9269 4.02061 38.8318 3.98573C38.7398 3.95085 38.6637 3.87317 38.6035 3.75269L38.028 2.65881C37.9931 2.58905 37.9583 2.5193 37.9234 2.44954C37.8917 2.37979 37.86 2.31003 37.8283 2.24028C37.7966 2.16735 37.7648 2.09443 37.7331 2.0215L37.0388 2.17845V1.24152C37.0768 1.18762 37.1355 1.1464 37.2147 1.11786C37.2972 1.08933 37.386 1.07506 37.4811 1.07506C37.5857 1.07506 37.684 1.0925 37.7759 1.12738C37.8711 1.16225 37.9487 1.23835 38.009 1.35566L38.5892 2.4543C38.6241 2.52088 38.659 2.59064 38.6939 2.66356C38.7287 2.73332 38.762 2.80307 38.7937 2.87283C38.8254 2.94258 38.8556 3.01392 38.8841 3.08685L39.5737 2.93466ZM41.1234 3.90964C40.9363 3.90964 40.7619 3.87476 40.6002 3.805C40.4417 3.73208 40.3132 3.61318 40.215 3.4483C40.1198 3.28026 40.0723 3.06148 40.0723 2.79198C40.0723 2.54149 40.1214 2.33223 40.2197 2.16418C40.3212 1.99297 40.4623 1.86456 40.643 1.77895C40.8237 1.69017 41.033 1.64578 41.2708 1.64578C41.442 1.64578 41.6005 1.66956 41.7464 1.71712C41.8954 1.76151 42.0111 1.81065 42.0936 1.86456C42.1506 1.9026 42.1966 1.94858 42.2315 2.00248C42.2664 2.05321 42.2838 2.11821 42.2838 2.19748V3.69086H41.6037V2.27833C41.5688 2.2593 41.526 2.24187 41.4753 2.22601C41.4277 2.21016 41.3675 2.20223 41.2946 2.20223C41.1424 2.20223 41.0171 2.24979 40.9188 2.34491C40.8237 2.44003 40.7762 2.58905 40.7762 2.79198C40.7762 3.01392 40.8206 3.1677 40.9093 3.25331C41.0013 3.33575 41.1154 3.37696 41.2518 3.37696C41.3564 3.37696 41.4436 3.35953 41.5133 3.32465C41.5831 3.2866 41.6433 3.24538 41.6941 3.20099L41.7131 3.7622C41.6465 3.80342 41.5657 3.8383 41.4705 3.86683C41.3754 3.89537 41.2597 3.90964 41.1234 3.90964ZM41.618 3.97622V3.53391H42.2838V3.99524C42.2838 4.21719 42.2315 4.39792 42.1269 4.53743C42.0254 4.67694 41.8859 4.77998 41.7083 4.84657C41.534 4.91315 41.3374 4.94644 41.1186 4.94644C40.9537 4.94644 40.8063 4.93218 40.6763 4.90364C40.5495 4.8751 40.4528 4.83864 40.3862 4.79425C40.2784 4.7245 40.2245 4.62621 40.2245 4.49938C40.2245 4.4328 40.2371 4.37255 40.2625 4.31865C40.2911 4.26792 40.3243 4.22987 40.3624 4.20451C40.448 4.25524 40.5495 4.29804 40.6668 4.33292C40.7841 4.37097 40.9077 4.38999 41.0377 4.38999C41.2153 4.38999 41.3564 4.3567 41.461 4.29012C41.5657 4.2267 41.618 4.12207 41.618 3.97622ZM45.1404 2.85856C45.1404 3.10587 45.0896 3.32148 44.9882 3.50538C44.8899 3.6861 44.7504 3.82561 44.5696 3.9239C44.3889 4.02219 44.1765 4.07134 43.9323 4.07134C43.6914 4.07134 43.4789 4.02378 43.295 3.92866C43.1143 3.83037 42.9732 3.69086 42.8717 3.51013C42.7734 3.32623 42.7243 3.10904 42.7243 2.85856C42.7243 2.60808 42.775 2.39406 42.8765 2.2165C42.978 2.03577 43.1191 1.89626 43.2998 1.79797C43.4837 1.69651 43.6945 1.64578 43.9323 1.64578C44.1733 1.64578 44.3841 1.69651 44.5649 1.79797C44.7456 1.89626 44.8867 2.03736 44.9882 2.22126C45.0896 2.40198 45.1404 2.61442 45.1404 2.85856ZM43.9323 2.20223C43.7833 2.20223 43.6644 2.2593 43.5756 2.37345C43.49 2.48759 43.4472 2.6493 43.4472 2.85856C43.4472 3.07099 43.49 3.23428 43.5756 3.34843C43.6612 3.4594 43.7801 3.51489 43.9323 3.51489C44.0845 3.51489 44.2034 3.45782 44.289 3.34367C44.3746 3.22953 44.4174 3.06782 44.4174 2.85856C44.4174 2.65247 44.3746 2.49235 44.289 2.3782C44.2034 2.26089 44.0845 2.20223 43.9323 2.20223ZM44.3128 4.66108C44.3128 4.76572 44.2779 4.85291 44.2082 4.92266C44.1384 4.99559 44.0449 5.03205 43.9276 5.03205C43.8166 5.03205 43.7246 4.99559 43.6517 4.92266C43.582 4.85291 43.5471 4.76572 43.5471 4.66108C43.5471 4.55328 43.582 4.4645 43.6517 4.39475C43.7246 4.32499 43.8166 4.29012 43.9276 4.29012C44.0449 4.29012 44.1384 4.32499 44.2082 4.39475C44.2779 4.4645 44.3128 4.55328 44.3128 4.66108ZM46.8151 2.20699C46.6438 2.20699 46.4964 2.26406 46.3727 2.3782C46.2523 2.48918 46.192 2.65247 46.192 2.86807C46.192 3.08051 46.2507 3.24063 46.368 3.34843C46.4853 3.45623 46.6327 3.51013 46.8103 3.51013C46.9149 3.51013 47.0053 3.49745 47.0814 3.47208C47.1607 3.44355 47.2288 3.41343 47.2859 3.38172C47.3398 3.41977 47.381 3.46257 47.4096 3.51013C47.4381 3.55452 47.4524 3.61001 47.4524 3.67659C47.4524 3.79391 47.3889 3.88903 47.2621 3.96195C47.1353 4.03488 46.9593 4.07134 46.7342 4.07134C46.4837 4.07134 46.2634 4.02695 46.0731 3.93817C45.8829 3.84622 45.7354 3.70988 45.6308 3.52916C45.5262 3.34843 45.4739 3.12807 45.4739 2.86807C45.4739 2.59222 45.5309 2.36552 45.6451 2.18796C45.7592 2.00724 45.9098 1.87248 46.0969 1.7837C46.2871 1.69175 46.4932 1.64578 46.7152 1.64578C46.934 1.64578 47.1052 1.68541 47.2288 1.76468C47.3557 1.84395 47.4191 1.94224 47.4191 2.05955C47.4191 2.11662 47.4048 2.16894 47.3763 2.2165C47.3509 2.26089 47.3208 2.30052 47.2859 2.3354C47.2257 2.30369 47.1559 2.27516 47.0766 2.24979C47.0005 2.22126 46.9133 2.20699 46.8151 2.20699Z"
										fill={baseColor}
									/>
								</svg>
							</div>
							<p id="Introduction Title" className="text-xl font-bold">
								CTCP TỔNG CÔNG TY MAY ĐỒNG NAI, với tên giao dịch là DONAGAMEX
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor nemo consequuntur,
								reprehenderit similique corporis hic soluta tempora cum iste earum? Perspiciatis
								dolore suscipit totam rerum at velit in quia repellendus. Consequatur quidem,
								consequuntur eveniet numquam asperiores maiores quis unde accusantium! Dolores
								provident aliquam ea incidunt dolor quam necessitatibus iste temporibus at minus
								voluptates doloribus voluptatum quos repudiandae, voluptate officia inventore!
								Architecto, obcaecati non! Culpa aliquam est molestias. Porro tempore, beatae, quia,
								a fugit delectus ullam pariatur est praesentium unde error commodi? Nisi placeat
								temporibus harum. Eveniet doloribus saepe fugiat magnam?
							</p>
						</div>
					</div>
					<div id="services" className="flex flex-col gap-y-5">
						<div
							id="service subtitle"
							className="text-xl w-full flex gap-x-5 justify-center items-center">
							<svg
								width="34"
								height="4"
								viewBox="0 0 34 4"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M2 2H32" stroke={baseColor} stroke-width="3" stroke-linecap="round" />
							</svg>

							<p style={BalooPaaji2.bold.style} className={`text-[#00699d] w-fit`}>
								Chúng tôi có gì?
							</p>

							<svg
								width="34"
								height="4"
								viewBox="0 0 34 4"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M2 2H32" stroke={baseColor} stroke-width="3" stroke-linecap="round" />
							</svg>
						</div>
						<div style={BalooPaaji2.bold.style} id="service main title">
							<p className="w-fit mx-auto font-bold text-3xl">DỊCH VỤ CỦA HIẾU NGỌC</p>
						</div>
						<div style={BalooPaaji2.normal.style} className="grid grid-cols-3 grid-rows-1 gap-x-5">
							<div
								className={`relative w-3/4 h-full py-5 flex flex-col gap-y-5 items-center mx-auto ${borderBaseColor} border-solid border-2 rounded-xl ${bgBaseColorHover} hover:border-none hover:text-white`}>
								<Image
									alt="Design Icon"
									src={DesignIcon}
									className="object-contain w-1/4 aspect-square"
								/>
								<p style={BalooPaaji2.bold.style} className="text-xl">
									Thiết kế
								</p>
								<p className="w-3/4 text-center">
									Chúng tôi có đội ngũ thiết kế chuyên nghiệp nhằm tạo ra nhiều mẫu hình đáp ứng nhu
									cầu khách hàng.
								</p>
							</div>
							<div
								className={`relative w-3/4 h-full py-5 flex flex-col gap-y-5 items-center mx-auto ${borderBaseColor} border-solid border-2 rounded-xl ${bgBaseColorHover} hover:border-none hover:text-white`}>
								<Image
									alt="Print Icon"
									src={PrintIcon}
									className="object-contain w-1/4 aspect-square"
								/>
								<p style={BalooPaaji2.bold.style} className="text-xl">
									In ấn
								</p>
								<p className="w-3/4 text-center">
									Chúng tôi luôn trang bị những thiết bị hiện đại nhất nhằm đảm bảo chất lượng sản
									phẩm luôn tốt nhất.
								</p>
							</div>
							<div
								className={`relative w-3/4 h-full py-5 flex flex-col gap-y-5 items-center mx-auto ${borderBaseColor} border-solid border-2 rounded-xl ${bgBaseColorHover} hover:border-none hover:text-white`}>
								<Image
									alt="Sewing Icon"
									src={SewingIcon}
									className="object-contain w-1/4 aspect-square"
								/>
								<p style={BalooPaaji2.bold.style} className="text-xl">
									May mặc
								</p>
								<p className="w-3/4 text-center">
									Chúng tôi sẵn sàng nhập về những chất liệu vải tốt nhất để cho ra những sản phẩm
									đạt chất lượng cao.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={BalooPaaji2.normal.style} id="footer" className="bg-[#00699d]">
				<div id="interBox" className="grid grid-cols-[1fr_1px_1fr] grid-rows-1 px-12 py-8">
					<div className="flex flex-col gap-y-4 px-8">
						<Image alt="Footer Logo" src={Logo} className="w-[15%]" />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias facilis perspiciatis
							quis dignissimos delectus quod inventore veritatis, saepe praesentium! Ducimus fugit
							quos illo ullam non nemo sequi at reiciendis sapiente! Deleniti inventore rerum
							dolorem magni unde numquam doloremque suscipit, culpa ullam debitis impedit
							dignissimos ad praesentium consequuntur nobis cum. Repellat enim eaque maxime quia
							inventore deleniti minus ipsum praesentium. Exercitationem.
						</p>
					</div>
					<div className="border-l border-black border-solid w-full h-full" />
					<div className="flex flex-col gap-y-3 pl-8 text-white">
						<p className="font-bold text-2xl">Thông tin liên hệ</p>
						<div className="flex gap-x-8 items-center">
							<FontAwesomeIcon icon={faMapLocation} fixedWidth />
							<Link target="_blank" href="https://maps.app.goo.gl/aunQUHbZPT4yAevi6">
								89/49 Phan Huy Ích, Phường 15, Quận Tân Bình
							</Link>
						</div>
						<div className="flex gap-x-8 items-center">
							<FontAwesomeIcon icon={faPhone} fixedWidth />
							<Link href="tel:+84989988949">0989988949</Link>
						</div>
						<div className="flex gap-x-8 items-center">
							<FontAwesomeIcon icon={faMailBulk} fixedWidth />
							<Link href="mailto:ctyhieungoc71@gmail.com">ctyhieungoc71@gmail.com</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
