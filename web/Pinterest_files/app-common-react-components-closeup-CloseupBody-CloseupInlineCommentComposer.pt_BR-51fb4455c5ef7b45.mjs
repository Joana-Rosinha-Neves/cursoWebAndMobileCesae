"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[68357],{272965:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(667294),a=n(545007),r=n(883119),o=n(161881),s=n(903591),m=n(53264),_=n(214877),l=n(976731),c=n(454514),d=n(140017),u=n(96452),g=n(13848),p=n(149722),f=n(413110),A=n(923368),C=n(930822),y=n(785893);function h({aggregatedPinDataId:e,closeupAttributionId:t,commentCount:n,disablePhotoCommentSelection:h,isEligibleForPinReactions:S,isPDP:E,orbacSubjectId:x,pinId:D,privatePin:L,reactionByMe:N,reactionCounts:P,setIsLoadingNewlyCreatedComment:Z,showCommentComposer:O,showReactBackground:j,storyPinDataId:I,viewParameter:b}){let v;let w=(0,d.ZP)(),B=(0,p.Z)(),T=(0,a.I0)(),{logContextEvent:k}=(0,_.v)(),M=(0,o.Z)(),{showOneToast:U}=(0,g.F9)(),{inCommentFooterRedesignExp:z,closeupWithinMasonryEnabled:H,peekCloseupEnabled:K,clientTrackingParams:R}=(0,A.x4)(),[W,F]=(0,i.useState)(!1),[J,G]=(0,i.useState)(s.A9.NONE);v=E?H?2:8:H?1:0;let q=E?z?8:6:0;async function Q(n){let{contentMarkdown:i,force:a,imageSignatures:r,tags:o}=n;if(null===e)return!1;Z(!0);try{if(e){if(r.length){let t={aggregatedPinDataId:e,details:i,image_signatures:r,pin_id:D??"",username:B.username||"",fromUnifiedComment:!0};await T((0,C.DD)(t))}else await M({force:a,fromUnifiedComment:!0,objectType:f.o.pin,objectId:e,pinId:D,tags:o,text:i,orbacSubjectId:x});k({event_type:7,clientTrackingParams:R,object_id_str:D,aux_data:{num_user_mention_tags:(o?JSON.parse(o):[]).length,...I?{creator_id:t,story_pin_data_id:I}:{}}})}}catch(e){return[u.ky,u.LJ].includes((0,l.Z)(e,"api_error_code")??0)?G((0,l.Z)(e,"api_error_code")===u.ky?s.A9.WARNING:s.A9.BLOCK):U(({hideToast:t})=>(0,y.jsx)(c.ZP,{onHide:t,text:(0,l.Z)(e,"message_detail")||(0,l.Z)(e,"message")||w.bt("Ocorreu um erro ao publicar seu comentário.", "There was an issue posting your comment.", "comment.post.errorMessage", undefined, true),type:"error"})),Z(!1),!1}return F(!1),Z(!1),!0}let{marginEnd:V,marginStart:X}=K?{marginEnd:4,marginStart:4}:{marginEnd:v,marginStart:H?2:q};return(0,y.jsx)(r.xu,{marginEnd:V,marginStart:X,children:(0,y.jsx)(m.Z,{clientTrackingParams:R,commentCount:n,commentWarningModalState:J,disablePhotoCommentSelection:h,dismissCommentWarningModal:()=>G(s.A9.NONE),iconSize:E?20:void 0,isCloseup:H,isEligibleForPinReactions:S,isLeftAligned:E,objectType:f.o.pin,onAddItem:Q,onCancelItem:()=>F(!1),onEnter:()=>F(!0),pinId:D,privatePin:L,reactionByMe:N,reactionCounts:P,showCommentComposer:O,showReactBackground:!E&&j,statusType:W?"textInflightCreation":"textStaticDisplay",viewParameter:b})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/app-common-react-components-closeup-CloseupBody-CloseupInlineCommentComposer.pt_BR-51fb4455c5ef7b45.mjs.map