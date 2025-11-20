import{c as k,r as L,a as w,i as y,x as c,u as _,e as ce,v as D,R as d,C as g,A as j,X as de,y as V,n as F,a3 as ae,O as E,h as U,b as ue,S as O,M as R,q as z,T as he,U as ne,a4 as pe,a5 as me,Y as fe,a6 as we}from"./reown-DQVHWXW5.js";import{n as l,o as S,r as u,H as ee}from"./index-CfHk2d3v.js";import"./index-BFLxWqH6.js";import"./wagmi-B9BWfMKM.js";import"./vendor-CalhZtuG.js";const be=k`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var ge=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let K=class extends y{render(){return c`<slot></slot>`}};K.styles=[L,be];K=ge([w("wui-card")],K);const ye=k`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var Y=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const ve={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let N=class extends y{constructor(){super(...arguments),this.message="",this.type="info"}render(){return c`
      <wui-flex
        data-type=${S(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${ve[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){_.close()}};N.styles=[L,ye];Y([l()],N.prototype,"message",void 0);Y([l()],N.prototype,"type",void 0);N=Y([w("wui-alertbar")],N);const xe=k`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var se=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const ke={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let H=class extends y{constructor(){super(),this.unsubscribe=[],this.open=_.state.open,this.onOpen(!0),this.unsubscribe.push(_.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:i}=_.state,r=ke[i];return c`
      <wui-alertbar
        message=${t}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
        type=${i}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};H.styles=xe;se([u()],H.prototype,"open",void 0);H=se([w("w3m-alertbar")],H);const $e=k`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var A=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const Ce={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Se={lg:"lg",md:"md",sm:"sm"};let W=class extends y{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return c`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const t=Ce[this.size];return this.text?c`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return c`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const t=Se[this.size];return c` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};W.styles=[L,ce,$e];A([l()],W.prototype,"imageSrc",void 0);A([l()],W.prototype,"text",void 0);A([l()],W.prototype,"size",void 0);A([l()],W.prototype,"type",void 0);A([l({type:Boolean})],W.prototype,"disabled",void 0);W=A([w("wui-select")],W);const We=k`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var I=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const Ie=["SmartSessionList"],Re={PayWithExchange:D.tokens.theme.foregroundPrimary};function te(){var m,b,P,G,q,Z,J,Q;const e=(b=(m=d.state.data)==null?void 0:m.connector)==null?void 0:b.name,t=(G=(P=d.state.data)==null?void 0:P.wallet)==null?void 0:G.name,i=(Z=(q=d.state.data)==null?void 0:q.network)==null?void 0:Z.name,r=t??e,a=U.getConnectors(),o=a.length===1&&((J=a[0])==null?void 0:J.id)==="w3m-email",n=(Q=g.getAccountData())==null?void 0:Q.socialProvider,s=n?n.charAt(0).toUpperCase()+n.slice(1):"Connect Social";return{Connect:`Connect ${o?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:r?`Get ${r}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:i??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:s,ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let x=class extends y{constructor(){super(),this.unsubscribe=[],this.heading=te()[d.state.view],this.network=g.state.activeCaipNetwork,this.networkImage=j.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=d.state.view,this.viewDirection="",this.unsubscribe.push(de.subscribeNetworkImages(()=>{this.networkImage=j.getNetworkImage(this.network)}),d.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.heading=te()[t]},V.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),g.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=j.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=Re[d.state.view]??D.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),c`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){F.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),d.push("WhatIsAWallet")}async onClose(){await ae.safeClose()}rightHeaderTemplate(){var i,r,a;const t=(a=(r=(i=E)==null?void 0:i.state)==null?void 0:r.features)==null?void 0:a.smartSessions;return d.state.view!=="Account"||!t?this.closeButtonTemplate():c`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>d.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return c`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){const t=Ie.includes(this.view);return c`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${t?c`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var b;const{view:t}=d.state,i=t==="Connect",r=E.state.enableEmbedded,a=t==="ApproveTransaction",o=t==="ConnectingSiwe",n=t==="Account",s=E.state.enableNetworkSwitch,m=a||o||i&&r;return n&&s?c`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${S((b=this.network)==null?void 0:b.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${S(this.networkImage)}
      ></wui-select>`:this.showBack&&!m?c`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:c`<wui-icon-button
      data-hidden=${!i}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(F.sendEvent({type:"track",event:"CLICK_NETWORKS"}),d.push("Networks"))}isAllowedNetworkSwitch(){const t=g.getAllRequestedCaipNetworks(),i=t?t.length>1:!1,r=t==null?void 0:t.find(({id:a})=>{var o;return a===((o=this.network)==null?void 0:o.id)});return i||!r}onViewChange(){const{history:t}=d.state;let i=V.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(i=V.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=i}async onHistoryChange(){var r;const{history:t}=d.state,i=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&i?(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){d.goBack()}};x.styles=We;I([u()],x.prototype,"heading",void 0);I([u()],x.prototype,"network",void 0);I([u()],x.prototype,"networkImage",void 0);I([u()],x.prototype,"showBack",void 0);I([u()],x.prototype,"prevHistoryLength",void 0);I([u()],x.prototype,"view",void 0);I([u()],x.prototype,"viewDirection",void 0);x=I([w("w3m-header")],x);const Ee=k`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var X=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let T=class extends y{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return c`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){const t={success:"success",error:"error",warning:"warning",info:"default"},i={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};return this.variant==="loading"?c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${i[this.variant]}
    ></wui-icon-box>`}};T.styles=[L,Ee];X([l()],T.prototype,"message",void 0);X([l()],T.prototype,"variant",void 0);T=X([w("wui-snackbar")],T);const Oe=ue`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var le=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let B=class extends y{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=O.state.open,this.unsubscribe.push(O.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:i}=O.state;return c` <wui-snackbar message=${t} variant=${i}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),O.state.autoClose&&(this.timeout=setTimeout(()=>O.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};B.styles=Oe;le([u()],B.prototype,"open",void 0);B=le([w("w3m-snackbar")],B);const Ae=k`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var $=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const ie="scroll-lock",Pe={PayWithExchange:"0",PayWithExchangeSelectAsset:"0"};class v extends y{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=E.state.enableEmbedded,this.open=R.state.open,this.caipAddress=g.state.activeCaipAddress,this.caipNetwork=g.state.activeCaipNetwork,this.shake=R.state.shake,this.filterByNamespace=U.state.filterByNamespace,this.padding=D.spacing[1],this.mobileFullScreen=E.state.enableMobileFullScreen,this.initializeTheming(),z.prefetchAnalyticsConfig(),this.unsubscribe.push(R.subscribeKey("open",t=>t?this.onOpen():this.onClose()),R.subscribeKey("shake",t=>this.shake=t),g.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),g.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),E.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),U.subscribeKey("filterByNamespace",t=>{var i;this.filterByNamespace!==t&&!((i=g.getAccountData(t))!=null&&i.caipAddress)&&(z.fetchRecommendedWallets(),this.filterByNamespace=t)}),d.subscribeKey("view",()=>{this.dataset.border=ee.hasFooter()?"true":"false",this.padding=Pe[d.state.view]??D.spacing[1]}))}firstUpdated(){if(this.dataset.border=ee.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){R.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?c`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?c`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return c` <wui-card
      shake="${this.shake}"
      data-embedded="${S(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){if(t.target===t.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await ae.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:i}=he.state,r=ne.getColorTheme(i);pe(t,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),O.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=ie,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${ie}"]`);t&&t.remove()}onAddKeyboardListener(){var i;this.abortController=new AbortController;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:a}=r.target;a&&!a.includes("W3M-")&&!a.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const i=g.state.isSwitchingNamespace,r=d.state.view==="ProfileWallets";!t&&!i&&!r&&R.close(),await me.initializeIfEnabled(t),this.caipAddress=t,g.setIsSwitchingNamespace(!1)}onNewNetwork(t){var b,P;const i=this.caipNetwork,r=(b=i==null?void 0:i.caipNetworkId)==null?void 0:b.toString(),a=(P=t==null?void 0:t.caipNetworkId)==null?void 0:P.toString(),o=r!==a,n=d.state.view==="UnsupportedChain",s=R.state.open;let m=!1;this.enableEmbedded&&d.state.view==="SwitchNetwork"&&(m=!0),o&&fe.resetState(),s&&n&&(m=!0),m&&d.state.view!=="SIWXSignMessage"&&d.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(z.prefetch(),z.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}v.styles=Ae;$([l({type:Boolean})],v.prototype,"enableEmbedded",void 0);$([u()],v.prototype,"open",void 0);$([u()],v.prototype,"caipAddress",void 0);$([u()],v.prototype,"caipNetwork",void 0);$([u()],v.prototype,"shake",void 0);$([u()],v.prototype,"filterByNamespace",void 0);$([u()],v.prototype,"padding",void 0);$([u()],v.prototype,"mobileFullScreen",void 0);let oe=class extends v{};oe=$([w("w3m-modal")],oe);let re=class extends v{};re=$([w("appkit-modal")],re);const Ne=k`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`;var Te=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let M=class extends y{constructor(){super()}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){d.goBack()}};M.styles=Ne;M=Te([w("w3m-usage-exceeded-view")],M);const ze=k`
  :host {
    width: 100%;
  }
`;var p=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};let h=class extends y{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(t){super.updated(t),(t.has("name")||t.has("imageSrc")||t.has("walletRank"))&&(this.hasImpressionSent=!1),t.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&F.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:d.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(we.state.adapters).length>1?this.namespaces:[]}render(){return c`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${S(this.imageSrc)}
        name=${this.name}
        size=${S(this.size)}
        tagLabel=${S(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};h.styles=ze;p([l({type:Array})],h.prototype,"walletImages",void 0);p([l()],h.prototype,"imageSrc",void 0);p([l()],h.prototype,"name",void 0);p([l()],h.prototype,"size",void 0);p([l()],h.prototype,"tagLabel",void 0);p([l()],h.prototype,"tagVariant",void 0);p([l()],h.prototype,"walletIcon",void 0);p([l()],h.prototype,"tabIdx",void 0);p([l({type:Boolean})],h.prototype,"disabled",void 0);p([l({type:Boolean})],h.prototype,"showAllWallets",void 0);p([l({type:Boolean})],h.prototype,"loading",void 0);p([l({type:String})],h.prototype,"loadingSpinnerColor",void 0);p([l()],h.prototype,"rdnsId",void 0);p([l()],h.prototype,"displayIndex",void 0);p([l()],h.prototype,"walletRank",void 0);p([l({type:Array})],h.prototype,"namespaces",void 0);h=p([w("w3m-list-wallet")],h);const _e=k`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var C=function(e,t,i,r){var a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const De=60;let f=class extends y{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=E.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(t){if(t.has("history")){const i=this.history;this.historyState!==""&&this.historyState!==i&&this.onViewChange(i)}t.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),t.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var t;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(i=>{var r;for(const a of i)if(a.target===this.getWrapper()){let o=a.contentRect.height;const n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){const s=((r=window.visualViewport)==null?void 0:r.height)||window.innerHeight,m=this.getHeaderHeight();o=s-m-n,this.style.setProperty("--local-border-bottom-radius","0px")}else o=o+n,this.style.setProperty("--local-border-bottom-radius",n?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${o}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${o}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),(t=window.visualViewport)==null||t.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var i;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),(i=window.visualViewport)==null||i.removeEventListener("resize",this.onViewportResize)}render(){return c`
      <div class="container" data-mobile-fullscreen="${S(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${S(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(t){const i=t.split(",").filter(Boolean),r=this.historyState.split(",").filter(Boolean),a=r.length,o=i.length,n=i[i.length-1]||"",s=ne.cssDurationToNumber(this.transitionDuration);let m="";o>a?m="next":o<a?m="prev":o===a&&i[o-1]!==r[a-1]&&(m="next"),this.viewDirection=`${m}-${n}`,setTimeout(()=>{var b;this.historyState=t,(b=this.setView)==null||b.call(this,n)},s),setTimeout(()=>{this.viewDirection=""},s*2)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.page")}updateContainerHeight(){var a;const t=this.getWrapper();if(!t)return;const i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let r=0;if(this.mobileFullScreen){const o=((a=window.visualViewport)==null?void 0:a.height)||window.innerHeight,n=this.getHeaderHeight();r=o-n-i,this.style.setProperty("--local-border-bottom-radius","0px")}else r=t.getBoundingClientRect().height+i,this.style.setProperty("--local-border-bottom-radius",i?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${r}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${r}px`}getHeaderHeight(){return De}};f.styles=[_e];C([l({type:String})],f.prototype,"transitionDuration",void 0);C([l({type:String})],f.prototype,"transitionFunction",void 0);C([l({type:String})],f.prototype,"history",void 0);C([l({type:String})],f.prototype,"view",void 0);C([l({attribute:!1})],f.prototype,"setView",void 0);C([u()],f.prototype,"viewDirection",void 0);C([u()],f.prototype,"historyState",void 0);C([u()],f.prototype,"previousHeight",void 0);C([u()],f.prototype,"mobileFullScreen",void 0);f=C([w("w3m-router-container")],f);export{re as AppKitModal,h as W3mListWallet,oe as W3mModal,v as W3mModalBase,f as W3mRouterContainer,M as W3mUsageExceededView};
//# sourceMappingURL=w3m-modal-B2An-qc9.js.map
