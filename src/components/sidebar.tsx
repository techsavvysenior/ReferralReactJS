import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { BsPeople, BsChatText } from "react-icons/bs";

function Sidebar(props: any) {
  const location = useLocation();

  return (
    <div className={`sidebar ${props.open ? "active" : ""}`}>
      <BiX
        className="hamber d-md-none"
        onClick={props.setOpen}
        size={30}
        color="#fff"
      />
      <span className="logo">AI</span>
      <Link
        to="/dashboard"
        className={location.pathname === "/dashboard" ? "active" : ""}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_355)">
            <path
              d="M5.33333 17.3333H13.3333C14.0667 17.3333 14.6667 16.7333 14.6667 16V5.33333C14.6667 4.6 14.0667 4 13.3333 4H5.33333C4.6 4 4 4.6 4 5.33333V16C4 16.7333 4.6 17.3333 5.33333 17.3333ZM5.33333 28H13.3333C14.0667 28 14.6667 27.4 14.6667 26.6667V21.3333C14.6667 20.6 14.0667 20 13.3333 20H5.33333C4.6 20 4 20.6 4 21.3333V26.6667C4 27.4 4.6 28 5.33333 28ZM18.6667 28H26.6667C27.4 28 28 27.4 28 26.6667V16C28 15.2667 27.4 14.6667 26.6667 14.6667H18.6667C17.9333 14.6667 17.3333 15.2667 17.3333 16V26.6667C17.3333 27.4 17.9333 28 18.6667 28ZM17.3333 5.33333V10.6667C17.3333 11.4 17.9333 12 18.6667 12H26.6667C27.4 12 28 11.4 28 10.6667V5.33333C28 4.6 27.4 4 26.6667 4H18.6667C17.9333 4 17.3333 4.6 17.3333 5.33333Z"
              fill="#8B9FBD"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_355"
              x1="27.6372"
              y1="4"
              x2="0.0488332"
              y2="21.0749"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2BDD94" />
              <stop offset="0.46875" stopColor="#23D092" />
              <stop offset="1" stopColor="#19B799" />
            </linearGradient>
            <clipPath id="clip0_1_355">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <label>Campaigns</label>
      </Link>
      <Link
        to="/ambassadors"
        className={location.pathname === "/ambassadors" ? "active" : ""}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_355)">
            <path
              d="M5.33333 17.3333H13.3333C14.0667 17.3333 14.6667 16.7333 14.6667 16V5.33333C14.6667 4.6 14.0667 4 13.3333 4H5.33333C4.6 4 4 4.6 4 5.33333V16C4 16.7333 4.6 17.3333 5.33333 17.3333ZM5.33333 28H13.3333C14.0667 28 14.6667 27.4 14.6667 26.6667V21.3333C14.6667 20.6 14.0667 20 13.3333 20H5.33333C4.6 20 4 20.6 4 21.3333V26.6667C4 27.4 4.6 28 5.33333 28ZM18.6667 28H26.6667C27.4 28 28 27.4 28 26.6667V16C28 15.2667 27.4 14.6667 26.6667 14.6667H18.6667C17.9333 14.6667 17.3333 15.2667 17.3333 16V26.6667C17.3333 27.4 17.9333 28 18.6667 28ZM17.3333 5.33333V10.6667C17.3333 11.4 17.9333 12 18.6667 12H26.6667C27.4 12 28 11.4 28 10.6667V5.33333C28 4.6 27.4 4 26.6667 4H18.6667C17.9333 4 17.3333 4.6 17.3333 5.33333Z"
              fill="#8B9FBD"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_355"
              x1="27.6372"
              y1="4"
              x2="0.0488332"
              y2="21.0749"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2BDD94" />
              <stop offset="0.46875" stopColor="#23D092" />
              <stop offset="1" stopColor="#19B799" />
            </linearGradient>
            <clipPath id="clip0_1_355">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <label>Ambassadors</label>
      </Link>
      <Link
        to="/metrics"
        className={location.pathname === "/metrics" ? "active" : ""}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_355)">
            <path
              d="M5.33333 17.3333H13.3333C14.0667 17.3333 14.6667 16.7333 14.6667 16V5.33333C14.6667 4.6 14.0667 4 13.3333 4H5.33333C4.6 4 4 4.6 4 5.33333V16C4 16.7333 4.6 17.3333 5.33333 17.3333ZM5.33333 28H13.3333C14.0667 28 14.6667 27.4 14.6667 26.6667V21.3333C14.6667 20.6 14.0667 20 13.3333 20H5.33333C4.6 20 4 20.6 4 21.3333V26.6667C4 27.4 4.6 28 5.33333 28ZM18.6667 28H26.6667C27.4 28 28 27.4 28 26.6667V16C28 15.2667 27.4 14.6667 26.6667 14.6667H18.6667C17.9333 14.6667 17.3333 15.2667 17.3333 16V26.6667C17.3333 27.4 17.9333 28 18.6667 28ZM17.3333 5.33333V10.6667C17.3333 11.4 17.9333 12 18.6667 12H26.6667C27.4 12 28 11.4 28 10.6667V5.33333C28 4.6 27.4 4 26.6667 4H18.6667C17.9333 4 17.3333 4.6 17.3333 5.33333Z"
              fill="#8B9FBD"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_355"
              x1="27.6372"
              y1="4"
              x2="0.0488332"
              y2="21.0749"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2BDD94" />
              <stop offset="0.46875" stopColor="#23D092" />
              <stop offset="1" stopColor="#19B799" />
            </linearGradient>
            <clipPath id="clip0_1_355">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <label>Metrics</label>
      </Link>
      <Link
        to="/promptsV2"
        className={location.pathname === "/promptsV2" ? "active" : ""}
      >
        <svg
          width="28"
          height="22"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6667 0.333313H3.33341C1.86675 0.333313 0.666748 1.53331 0.666748 2.99998V19C0.666748 20.4666 1.86675 21.6666 3.33341 21.6666H24.6667C26.1334 21.6666 27.3334 20.4666 27.3334 19V2.99998C27.3334 1.53331 26.1334 0.333313 24.6667 0.333313ZM8.18675 14.2933C8.18675 14.68 7.86675 15 7.48008 15H7.36008C6.97341 15 6.65341 14.68 6.65341 14.2933V8.99998L6.05341 9.43998C5.73341 9.67998 5.26675 9.59998 5.04008 9.25331C4.84008 8.93331 4.90675 8.51998 5.21341 8.29331L6.80008 7.15998C6.94675 7.05331 7.12008 6.99998 7.30675 6.99998C7.78675 6.99998 8.18675 7.38665 8.18675 7.87998V14.2933ZM15.3467 15H11.7867C11.2534 15 10.8267 14.5733 10.8267 14.04C10.8267 13.7866 10.9334 13.5333 11.1067 13.36C12.3734 12.0933 13.2134 11.2533 13.6667 10.7733C14.2001 10.2133 14.3867 9.85331 14.3867 9.35998C14.3867 8.82665 13.9734 8.39998 13.3067 8.39998C12.8534 8.39998 12.5467 8.61331 12.3467 8.89331C12.1467 9.15998 11.8001 9.23998 11.4934 9.10665C11.0401 8.91998 10.8934 8.34665 11.2001 7.97331C11.4001 7.71998 11.6934 7.46665 12.0934 7.26665C13.0134 6.82665 14.0667 6.99998 14.6934 7.30665C15.8401 7.89331 15.9067 8.95998 15.9067 9.27998C15.9067 10.1333 15.4934 10.96 14.6801 11.76C14.3467 12.0933 13.7201 12.7066 12.8134 13.6133L12.8534 13.68H15.3601C15.7201 13.68 16.0134 13.9733 16.0134 14.3333C16.0134 14.6933 15.7067 15 15.3467 15ZM23.0001 13.8666C22.8934 14.04 22.2534 15 20.6534 15C20.6134 15 19.0134 15.08 18.2134 13.6933C18.0134 13.3466 18.1601 12.8933 18.5334 12.7466L18.6934 12.68C18.9867 12.56 19.3201 12.6666 19.4801 12.9333C19.6667 13.2533 20.0001 13.5866 20.6534 13.5866C21.2001 13.5866 21.8401 13.2133 21.8401 12.56C21.8401 11.8266 21.2001 11.5066 20.4534 11.5066C20.0934 11.5066 19.8001 11.2 19.8001 10.84C19.8001 10.4933 20.0667 10.2133 20.4001 10.1866V10.1733C20.8401 10.1733 21.5734 9.98665 21.5734 9.21331C21.5734 8.69331 21.1601 8.34665 20.5734 8.34665C20.1467 8.34665 19.8667 8.51998 19.6801 8.74665C19.4934 8.98665 19.1867 9.09331 18.9067 8.97331L18.8001 8.93331C18.4001 8.77331 18.2667 8.26665 18.5334 7.93331C18.8934 7.46665 19.5467 6.99998 20.5868 6.99998C22.0401 6.99998 22.6401 7.85331 22.7467 7.99998C23.1867 8.66665 23.1201 9.54665 22.7734 10.0933C22.5734 10.3866 22.3467 10.6 22.0801 10.7333V10.8266C22.4534 10.9733 22.7601 11.2 22.9867 11.52C23.4801 12.2133 23.4267 13.2133 23.0001 13.8666Z"
            fill="#8B9FBD"
          />
        </svg>
        <label>Prompts</label>
      </Link>
      {/*
      <Link
        to="/prompts"
        className={location.pathname === "/prompts" ? "active" : ""}
      >
        <svg
          width="28"
          height="22"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6667 0.333313H3.33341C1.86675 0.333313 0.666748 1.53331 0.666748 2.99998V19C0.666748 20.4666 1.86675 21.6666 3.33341 21.6666H24.6667C26.1334 21.6666 27.3334 20.4666 27.3334 19V2.99998C27.3334 1.53331 26.1334 0.333313 24.6667 0.333313ZM8.18675 14.2933C8.18675 14.68 7.86675 15 7.48008 15H7.36008C6.97341 15 6.65341 14.68 6.65341 14.2933V8.99998L6.05341 9.43998C5.73341 9.67998 5.26675 9.59998 5.04008 9.25331C4.84008 8.93331 4.90675 8.51998 5.21341 8.29331L6.80008 7.15998C6.94675 7.05331 7.12008 6.99998 7.30675 6.99998C7.78675 6.99998 8.18675 7.38665 8.18675 7.87998V14.2933ZM15.3467 15H11.7867C11.2534 15 10.8267 14.5733 10.8267 14.04C10.8267 13.7866 10.9334 13.5333 11.1067 13.36C12.3734 12.0933 13.2134 11.2533 13.6667 10.7733C14.2001 10.2133 14.3867 9.85331 14.3867 9.35998C14.3867 8.82665 13.9734 8.39998 13.3067 8.39998C12.8534 8.39998 12.5467 8.61331 12.3467 8.89331C12.1467 9.15998 11.8001 9.23998 11.4934 9.10665C11.0401 8.91998 10.8934 8.34665 11.2001 7.97331C11.4001 7.71998 11.6934 7.46665 12.0934 7.26665C13.0134 6.82665 14.0667 6.99998 14.6934 7.30665C15.8401 7.89331 15.9067 8.95998 15.9067 9.27998C15.9067 10.1333 15.4934 10.96 14.6801 11.76C14.3467 12.0933 13.7201 12.7066 12.8134 13.6133L12.8534 13.68H15.3601C15.7201 13.68 16.0134 13.9733 16.0134 14.3333C16.0134 14.6933 15.7067 15 15.3467 15ZM23.0001 13.8666C22.8934 14.04 22.2534 15 20.6534 15C20.6134 15 19.0134 15.08 18.2134 13.6933C18.0134 13.3466 18.1601 12.8933 18.5334 12.7466L18.6934 12.68C18.9867 12.56 19.3201 12.6666 19.4801 12.9333C19.6667 13.2533 20.0001 13.5866 20.6534 13.5866C21.2001 13.5866 21.8401 13.2133 21.8401 12.56C21.8401 11.8266 21.2001 11.5066 20.4534 11.5066C20.0934 11.5066 19.8001 11.2 19.8001 10.84C19.8001 10.4933 20.0667 10.2133 20.4001 10.1866V10.1733C20.8401 10.1733 21.5734 9.98665 21.5734 9.21331C21.5734 8.69331 21.1601 8.34665 20.5734 8.34665C20.1467 8.34665 19.8667 8.51998 19.6801 8.74665C19.4934 8.98665 19.1867 9.09331 18.9067 8.97331L18.8001 8.93331C18.4001 8.77331 18.2667 8.26665 18.5334 7.93331C18.8934 7.46665 19.5467 6.99998 20.5868 6.99998C22.0401 6.99998 22.6401 7.85331 22.7467 7.99998C23.1867 8.66665 23.1201 9.54665 22.7734 10.0933C22.5734 10.3866 22.3467 10.6 22.0801 10.7333V10.8266C22.4534 10.9733 22.7601 11.2 22.9867 11.52C23.4801 12.2133 23.4267 13.2133 23.0001 13.8666Z"
            fill="#8B9FBD"
          />
        </svg>
        <label>Prompts</label>
      </Link>
      */}
      {/* <Link
        to={"/users"}
        className={location.pathname === "/users" ? "active" : ""}
      >
        <BsPeople size={30} color="#8B9FBD" />
        <label>Users</label>
      </Link>
      <Link
        to="/send"
        className={location.pathname === "/send" ? "active" : ""}
      >
        <svg
          width="28"
          height="22"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6667 0.333313H3.33341C1.86675 0.333313 0.680081 1.53331 0.680081 2.99998L0.666748 19C0.666748 20.4666 1.86675 21.6666 3.33341 21.6666H24.6667C26.1334 21.6666 27.3334 20.4666 27.3334 19V2.99998C27.3334 1.53331 26.1334 0.333313 24.6667 0.333313ZM24.1334 5.99998L14.7067 11.8933C14.2801 12.16 13.7201 12.16 13.2934 11.8933L3.86675 5.99998C3.53341 5.78665 3.33341 5.42665 3.33341 5.03998C3.33341 4.14665 4.30675 3.61331 5.06675 4.07998L14.0001 9.66665L22.9334 4.07998C23.6934 3.61331 24.6667 4.14665 24.6667 5.03998C24.6667 5.42665 24.4667 5.78665 24.1334 5.99998Z"
            fill="#8B9FBD"
          />
        </svg>
        <label>Send</label>
      </Link>
      <Link
        to="/chats"
        className={location.pathname === "/chats" ? "active" : ""}
      >
        <BsChatText size={30} color="#8B9FBD" />
        <label>Chats</label>
      </Link> */}
      <Link
        to="/email"
        className={location.pathname === "/email" ? "active" : ""}
      >
        <svg
          width="28"
          height="22"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6667 0.333313H3.33341C1.86675 0.333313 0.680081 1.53331 0.680081 2.99998L0.666748 19C0.666748 20.4666 1.86675 21.6666 3.33341 21.6666H24.6667C26.1334 21.6666 27.3334 20.4666 27.3334 19V2.99998C27.3334 1.53331 26.1334 0.333313 24.6667 0.333313ZM24.1334 5.99998L14.7067 11.8933C14.2801 12.16 13.7201 12.16 13.2934 11.8933L3.86675 5.99998C3.53341 5.78665 3.33341 5.42665 3.33341 5.03998C3.33341 4.14665 4.30675 3.61331 5.06675 4.07998L14.0001 9.66665L22.9334 4.07998C23.6934 3.61331 24.6667 4.14665 24.6667 5.03998C24.6667 5.42665 24.4667 5.78665 24.1334 5.99998Z"
            fill="#8B9FBD"
          />
        </svg>
        <label>Email</label>
      </Link>
    </div>
  );
}

export default Sidebar;
