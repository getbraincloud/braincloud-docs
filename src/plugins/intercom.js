module.exports = function (context) {
    return {
        name: "injecthtmltags",
        injectHtmlTags() {
            return {
                postBodyTags: [
                    {
                        tagName: "script",
                        innerHTML: `
                        window.intercomSettings = {
                          api_base: "https://api-iam.intercom.io",
                          app_id: "ede963a7c7b854938c1196bb83dc3a0924951055"
                        };
                        // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/ede963a7c7b854938c1196bb83dc3a0924951055'
                        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ede963a7c7b854938c1196bb83dc3a0924951055';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
                        `,
                    },
                ],
            };
        },
    };
};
