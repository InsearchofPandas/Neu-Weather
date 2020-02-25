import React from 'react';
import Svg, { Path, Ellipse, Rect } from 'react-native-svg';


export const searchBarIcons = {
  hamburger:
  <Svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M24.4104 17V18H4.62988V17H24.4104ZM24.4104 12V13H4.62988V12H24.4104ZM24.4104 8H4.62988V7H24.4104V8Z" fill="#9CB9DC" stroke="#9CB9DC" />
  </Svg>,
  location:
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M10.9933 1.5681H10.9938V1.6181C10.9938 2.15092 10.9903 2.49754 10.9817 2.71286C10.9774 2.82023 10.9717 2.89666 10.9642 2.94775C10.9604 2.973 10.9559 2.99455 10.9499 3.01131C10.9469 3.01968 10.9428 3.02895 10.9368 3.03739C10.9309 3.04568 10.9206 3.05665 10.9045 3.06207L10.9033 3.06244L10.9022 3.06276C10.8837 3.06802 10.8084 3.0835 10.7066 3.10389C10.6083 3.12357 10.4821 3.14844 10.3497 3.17454L10.3287 3.17868L10.3282 3.17877C8.44715 3.53037 6.52804 4.65896 5.28593 6.13844C4.15729 7.48622 3.54509 8.82874 3.2021 10.709C3.20209 10.709 3.20208 10.7091 3.20206 10.7092L3.18365 10.8144L3.17641 10.8558H3.1344H1.6872H0.290234V12V13.1445H1.6872H3.13416H3.17584L3.18334 13.1855L3.20182 13.2865L3.20183 13.2866C3.52216 15.0481 4.07048 16.3129 5.04347 17.5647L5.04349 17.5647C6.37722 19.2822 8.49281 20.5432 10.5885 20.8719C10.5885 20.8719 10.5886 20.8719 10.5886 20.8719L10.9513 20.9271L10.9938 20.9335V20.9765V22.3685V23.7105H12.1152H13.2366V22.3824C13.2366 21.8496 13.2401 21.5029 13.2493 21.2875C13.2539 21.1801 13.26 21.1035 13.2683 21.0521C13.2723 21.0267 13.2773 21.0049 13.2841 20.9877C13.2894 20.9744 13.3019 20.9474 13.3313 20.9382C13.342 20.9347 13.3672 20.9293 13.3984 20.9228C13.4321 20.9159 13.4772 20.9069 13.5304 20.8966C13.6282 20.8775 13.7538 20.8536 13.8859 20.8284L13.9205 20.8218L13.9298 20.8709L13.9205 20.8218C17.2501 20.1871 20.0508 17.5142 20.8593 14.2072L20.8593 14.2071C20.9326 13.9091 21.0055 13.5575 21.0237 13.4268C21.0237 13.4268 21.0237 13.4267 21.0237 13.4267L21.0558 13.1881L21.0616 13.1447H21.1054H22.433H23.7102V12V10.8555H22.4326H21.1049H21.0611L21.0553 10.8121L21.0232 10.5688C21.0232 10.5687 21.0232 10.5687 21.0232 10.5687C20.9641 10.1235 20.6851 9.12645 20.4751 8.61038C20.0273 7.51385 19.4383 6.61439 18.6019 5.74599L18.6019 5.74596C17.3272 4.42093 15.6689 3.51201 13.92 3.17874L13.9294 3.12962L13.92 3.17873L13.8468 3.16479C13.729 3.14233 13.6182 3.1212 13.5299 3.10403C13.4767 3.09369 13.4316 3.08474 13.3979 3.07777C13.3671 3.0714 13.3418 3.0659 13.3307 3.0623C13.3014 3.05308 13.2889 3.02599 13.2837 3.01282C13.2769 2.99572 13.2719 2.97385 13.2679 2.94848C13.2596 2.89714 13.2535 2.82049 13.2489 2.71309C13.2396 2.49765 13.2362 2.15089 13.2362 1.6181V0.290019H12.1147H10.9933V1.5681ZM10.4311 19.0081L10.4311 19.0081C7.72469 18.3512 5.6573 16.2046 5.05164 13.4164C4.96306 13.0158 4.94944 12.8001 4.94944 12C4.94944 11.4688 4.96551 11.0959 5.02009 10.7463C5.07472 10.3964 5.16765 10.0716 5.31967 9.6361C6.44371 6.4028 9.6819 4.40437 13.0726 4.85317C14.8119 5.07988 16.4771 5.98152 17.5786 7.28676C19.7196 9.8163 19.9329 13.2677 18.1149 16.0014C16.4493 18.5087 13.3642 19.716 10.4311 19.0081Z" fill="#9CDCDC" stroke="#9CB9DC" />
    <Path d="M11.2102 6.84007L11.2101 6.84009C9.06219 7.22664 7.38297 8.89666 6.97353 11.0494L6.97353 11.0494C6.92842 11.2861 6.90547 11.642 6.90547 12.0002C6.90547 12.3584 6.92842 12.7143 6.97353 12.951L6.97353 12.951C7.44669 15.4402 9.59924 17.233 12.1154 17.233C14.7093 17.233 16.9205 15.34 17.3027 12.7876L17.3027 12.7875C17.685 10.2575 16.1879 7.83205 13.7578 7.02196C13.0122 6.77658 11.9824 6.69906 11.2102 6.84007Z" fill="#9CDCDC" stroke="#9CB9DC" />
  </Svg>,
  search: <Svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.5203 14.5H17.6036L17.285 14.226C18.4546 13.0511 19.0979 11.5513 19.0975 10C19.0975 8.27609 18.3069 6.6228 16.8996 5.40381C15.4923 4.18482 13.5836 3.5 11.5934 3.5C9.60322 3.5 7.69454 4.18482 6.28725 5.40381C4.87996 6.6228 4.08936 8.27609 4.08936 10C4.08936 11.7239 4.87996 13.3772 6.28725 14.5962C7.69454 15.8152 9.60322 16.5 11.5934 16.5C13.3834 16.5011 15.1143 15.9453 16.471 14.934L16.7897 15.208V16L22.562 20.991L24.2811 19.5L18.5226 14.5H18.5203ZM11.5934 14.5C10.2156 14.5 8.89416 14.0259 7.91989 13.182C6.94561 12.3381 6.3983 11.1935 6.3983 10C6.3983 8.80653 6.94561 7.66191 7.91989 6.81799C8.89416 5.97408 10.2156 5.5 11.5934 5.5C12.9713 5.5 14.2927 5.97408 15.267 6.81799C16.2412 7.66191 16.7886 8.80653 16.7886 10C16.7886 11.1935 16.2412 12.3381 15.267 13.182C14.2927 14.0259 12.9713 14.5 11.5934 14.5Z" fill="#B9DFF0" />
  </Svg>,
  pencil: <Svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M16.5208 2.89855L19.9446 6.18257L5.2129 20.313L1.78913 17.029L16.5208 2.89855Z" fill="#7E8DAA" />
    <Path d="M19.0391 0.483091C19.3172 0.216287 19.7617 0.210044 20.0318 0.469146L22.4774 2.81488C22.7475 3.07398 22.741 3.50031 22.4628 3.76711L21.2037 4.97484C20.9256 5.24165 20.4811 5.24789 20.211 4.98879L17.7654 2.64306C17.4953 2.38395 17.5018 1.95762 17.78 1.69082L19.0391 0.483091Z" fill="#7E8DAA" />
    <Path d="M1.05964 21.4419C0.800958 21.5093 0.569326 21.2888 0.637685 21.0403L1.62569 17.4478C1.69561 17.1935 2.02547 17.101 2.21587 17.2823L4.96666 19.9008C5.15705 20.082 5.06303 20.399 4.79844 20.468L1.05964 21.4419Z" fill="#7E8DAA" />
  </Svg>,
  x: <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect x="0.443604" y="28.728" width="40" height="4" rx="2" transform="rotate(-45 0.443604 28.728)" fill="#7E8DAA" />
    <Rect x="3.27222" y="0.445312" width="40" height="4" rx="2" transform="rotate(45 3.27222 0.445312)" fill="#7E8DAA" />
  </Svg>,


};
