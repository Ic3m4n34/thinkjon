/* ========================================================================
 * Omega: portfolio.js
 * Main Theme Javascript file
 * ========================================================================
 * Used for Magnific Popup Js Lightbox
 // https://codepen.io/dimsemenov/pen/hwIng
 * ======================================================================== */

          // handle parent popups
          function openParentPopup(id, withTranstion) {
            if (id === 'presentation') {
              if (withTranstion) {
                console.log('trns');
                $.magnificPopup.open({
                  mainClass: 'mfp-fade',
                  items: [
                    {
                      src: '#my-popup-pres', // CSS selector of an element on page that should be used as a popup
                      type: 'inline'
                    },
                    {
                      src: '#my-popup-pres', // 2nd one is to have the Next & Prev btns work
                      type: 'inline'
                    }
                  ],
                  gallery: {
                    enabled: true
                  },
                  type: 'image', // this is a default type
                });
              } else {
                console.log('here');
                $.magnificPopup.open({
                  items: [
                    {
                      src: '#my-popup-pres', // CSS selector of an element on page that should be used as a popup
                      type: 'inline'
                    },
                    {
                      src: '#my-popup-pres', // 2nd one is to have the Next & Prev btns work
                      type: 'inline'
                    }
                  ],
                  gallery: {
                    enabled: true
                  },
                  type: 'image' // this is a default type
                });
              }
            } else if (id === 'whiteboard') {
              if (withTranstion) {
                $.magnificPopup.open({
                  mainClass: 'mfp-fade',
                  items: [
                    {
                      src: '#my-popup-whtbrd', // CSS selector of an element on page that should be used as a popup
                      type: 'inline'
                    },
                    {
                      src: '#my-popup-whtbrd', // 2nd one is to have the Next & Prev btns work
                      type: 'inline'
                    }
                  ],
                  gallery: {
                    enabled: true
                  },
                  type: 'image' // this is a default type
                });
              } else {
                $.magnificPopup.open({
                  items: [
                    {
                      src: '#my-popup-whtbrd', // CSS selector of an element on page that should be used as a popup
                      type: 'inline'
                    },
                    {
                      src: '#my-popup-whtbrd', // 2nd one is to have the Next & Prev btns work
                      type: 'inline'
                    }
                  ],
                  gallery: {
                    enabled: true
                  },
                  type: 'image' // this is a default type
                });
              }
            } else if (id === 'digitalsignage') {
              if (withTranstion) {
                $.magnificPopup.open({
                  mainClass: 'mfp-fade',
                  items: [
                    {
                      src: '#my-popup-ds', // CSS selector of an element on page that should be used as a popup
                      type: 'inline'
                    },
                    {
                      src: '#my-popup-ds', // 2nd one is to have the Next & Prev btns work
                      type: 'inline'
                    }
                  ],
                  gallery: {
                    enabled: true
                  },
                  type: 'image' // this is a default type
                });
              } else {
                $.magnificPopup.open({
                  items: [
                    {
                      src: '#my-popup-ds', // CSS selector of an element on page that should be used as a popup
                      type: 'inline'
                    },
                    {
                      src: '#my-popup-ds', // 2nd one is to have the Next & Prev btns work
                      type: 'inline'
                    }
                  ],
                  gallery: {
                    enabled: true
                  },
                  type: 'image' // this is a default type
                });
              }
            }
          };

          // handle popups
          $('.parent-popup').on('click', (parentEvent) => {
            // get the parentTarget, so we can open the parent popup when the hamburger icon is clicked
            const parentTarget = $(`#${parentEvent.currentTarget.id}`);

            openParentPopup(parentEvent.currentTarget.id, true);

            // handle child popup click
            $('.open-popup').on('click', () => {
              const mfpContent = $('.mfp-content');
              mfpContent.css('position', 'relative');

              // check if hamburger-menu-button already exists and remove it if it does
              if ($('.hamburger').length) {
                $('.hamburger').remove();
              }

              // create hamburger-icon button
              const hamburgerButton = '<button class="hamburger"><img src="./assets/images/menu.png" alt="menu" /></button>';
              // place the button in the popup
              mfpContent.prepend(hamburgerButton);
              $('.hamburger').css('opacity', '0');
              $('.hamburger').animate({
                opacity: 1
              }, 1000);


              $('.hamburger').on('click', () => {
                $.magnificPopup.defaults.zoom.easing = '';
                // close current popup
                $.magnificPopup.close();

                // open parent popup again
                openParentPopup(parentEvent.currentTarget.id, false);
              });
            });
          });

            // Presentation   Images of category
            $('#open-pres-rockvale').magnificPopup({
                // mainClass: 'mfp-fade', disables zoom effect for menu popups
                items: [
                  /*
                  {
                    src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                    type: 'inline'
                  },
                  */
                  {
                    src: 'assets/images/portfolio/img-work-slidedeck-rockvale01-normal.jpg',
                   title: ''
                  },
                  {
                    src: 'assets/images/portfolio/img-work-slidedeck-rockvale02-normal.jpg',
                   title: ''
                  },
                  {
                    src: 'assets/images/portfolio/img-work-slidedeck-rockvale03-normal.jpg',
                   title: ''
                  },
                   {
                    src: 'assets/images/portfolio/img-work-slidedeck-rockvale04-normal.jpg',
                    title: ''
                  },
                   {
                   src: 'assets/images/portfolio/img-work-slidedeck-rockvaleSlide01-normal.jpg',
                   title: ''
                  },
                   {
                  src: 'assets/images/portfolio/img-work-slidedeck-rockvaleSlide02-normal.jpg',
                   title: ''
                  },
                  {
                 src: 'assets/images/portfolio/img-work-slidedeck-rockvaleSlide03-normal.jpg',
                  title: ''
                 },
                   {
                  src: 'assets/images/portfolio/img-work-slidedeck-rockvaleSlide04-normal.jpg',
                  title: ''
                  },
                    {
                   src: 'assets/images/portfolio/img-work-slidedeck-rockvaleSlide05-normal.jpg',
                   title: ''
                   },
                     {
                    src: 'assets/images/portfolio/img-work-slidedeck-rockvaleSlide06-normal.jpg',
                    title: ''
                    }

                  /*
                  {
                    src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                    type: 'iframe' // this overrides default type
                  },

                  {
                    src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                    type: 'inline'
                  },
                  {
                    src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                    type: 'inline'
                  },
                  {
                    src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                    type: 'inline'
                  }
                  */
                ],
                gallery: {
                  enabled: true
                },
                type: 'image' // this is a default type
            })

            $('#open-pres-caresight').magnificPopup({
                    // mainClass: 'mfp-fade', disables zoom effect for menu popups
                    items: [
                      /*
                      {
                        src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                        type: 'inline'
                      },
                      */
                      {
                        src: 'assets/images/portfolio/img-work01-normal.jpg',
                        title: ''
                      },
                      {
                        src: 'assets/images/portfolio/img-work02-normal.jpg',
                        title: ''
                      },
                      {
                        src: 'assets/images/portfolio/img-work03-normal.jpg',
                        title: ''
                      }
                      /*
                      {
                        src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                        type: 'iframe' // this overrides default type
                      },

                      {
                        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                        type: 'inline'
                      },
                      {
                        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                        type: 'inline'
                      },
                      {
                        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                        type: 'inline'
                      }
                      */
                    ],
                    gallery: {
                      enabled: true
                    },
                    type: 'image' // this is a default type
                })

            $('#open-pres-amex').magnificPopup({
                       // mainClass: 'mfp-fade', disables zoom effect for menu popups
                       items: [
                         /*
                         {
                           src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                           type: 'inline'
                         },
                         */
                         {
                           src: 'assets/images/portfolio/img-work01-normal.jpg',
                           title: ''
                         },
                         {
                           src: 'assets/images/portfolio/img-work02-normal.jpg',
                           title: ''
                         },
                         {
                           src: 'assets/images/portfolio/img-work03-normal.jpg',
                           title: ''
                         }
                         /*
                         {
                           src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                           type: 'iframe' // this overrides default type
                         },

                         {
                           src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                           type: 'inline'
                         },
                         {
                           src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                           type: 'inline'
                         },
                         {
                           src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                           type: 'inline'
                         }
                         */
                       ],
                       gallery: {
                         enabled: true
                       },
                       type: 'image' // this is a default type
                   })


            // Whiteboard Animation   Images of category
            $('#open-whtbrd-gradguard').magnificPopup({
                 // mainClass: 'mfp-fade', disables zoom effect for menu popups
                 items: [
                   /*
                   {
                     src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                     type: 'inline'
                   },
                   */
                   {
                     src: 'http://www.youtube.com/watch?v=xmN6lAnCKsg',
                     type: 'iframe' // this overrides default type
                   },
                   {
                     src: 'assets/images/portfolio/img-work01-normal.jpg',
                    title: ''
                   },
                   {
                     src: 'assets/images/portfolio/img-work02-normal.jpg',
                    title: ''
                  },
                    {
                      src: 'assets/images/portfolio/img-work03-normal.jpg',
                     title: ''
                   },
                   {
                     src: 'https://www.youtube.com/watch?v=rf4LOahI0Tc',
                     type: 'iframe' // this overrides default type
                   },
                   {
                     src: 'assets/images/portfolio/img-work01-normal.jpg',
                    title: ''
                   },
                   {
                     src: 'assets/images/portfolio/img-work02-normal.jpg',
                    title: ''
                  },
                    {
                      src: 'assets/images/portfolio/img-work03-normal.jpg',
                     title: ''
                   },
                   /*
                   {
                     src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                     type: 'iframe' // this overrides default type
                   },

                   {
                     src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                     type: 'inline'
                   },
                   {
                     src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                     type: 'inline'
                   },
                   {
                     src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                     type: 'inline'
                   }
                   */
                 ],
                 gallery: {
                   enabled: true
                 },
                 type: 'image' // this is a default type
             })

            $('#open-whtbrd-caseclick').magnificPopup({
                  // mainClass: 'mfp-fade', disables zoom effect for menu popups
                  items: [
                    /*
                    {
                      src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                      type: 'inline'
                    },
                    */
                    {
                      src: 'https://www.youtube.com/watch?v=rf4LOahI0Tc',
                      type: 'iframe' // this overrides default type
                    },
                    {
                      src: 'assets/images/portfolio/img-work01-normal.jpg',
                     title: ''
                    },
                    {
                      src: 'assets/images/portfolio/img-work02-normal.jpg',
                     title: ''
                   },
                     {
                       src: 'assets/images/portfolio/img-work03-normal.jpg',
                      title: ''
                    },

                    /*
                    {
                      src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                      type: 'iframe' // this overrides default type
                    },

                    {
                      src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                      type: 'inline'
                    },
                    {
                      src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                      type: 'inline'
                    },
                    {
                      src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                      type: 'inline'
                    }
                    */
                  ],
                  gallery: {
                    enabled: true
                  },
                  type: 'image' // this is a default type
              })

            $('#open-whtbrd-upsn').magnificPopup({
                    // mainClass: 'mfp-fade', disables zoom effect for menu popups
                    items: [
                      /*
                      {
                        src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                        type: 'inline'
                      },
                      */
                      {
                        src: 'https://www.youtube.com/watch?v=PopusbPYZAk',
                        type: 'iframe' // this overrides default type
                      },
                      {
                        src: 'assets/images/portfolio/img-work01-normal.jpg',
                       title: ''
                      },
                      {
                        src: 'assets/images/portfolio/img-work02-normal.jpg',
                       title: ''
                     },
                       {
                         src: 'assets/images/portfolio/img-work03-normal.jpg',
                        title: ''
                      },

                      /*
                      {
                        src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                        type: 'iframe' // this overrides default type
                      },

                      {
                        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                        type: 'inline'
                      },
                      {
                        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                        type: 'inline'
                      },
                      {
                        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                        type: 'inline'
                      }
                      */
                    ],
                    gallery: {
                      enabled: true
                    },
                    type: 'image' // this is a default type
                })


            // Digital Signage   Images of category
            $('#open-ds-adreel').magnificPopup({
                     // mainClass: 'mfp-fade', disables zoom effect for menu popups
                     items: [
                       /*
                       {
                         src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                         type: 'inline'
                       },
                        // beaver group content showreel https://youtu.be/FruyvPmUg90

                       */
                       {
                         src: 'https://www.youtube.com/watch?v=7SxIQ3TunYs',
                         type: 'iframe' // https://youtu.be/K-p-IAO-8jw  |    https://player.vimeo.com/video/231553843
                       },
                       /*
                       {
                         src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                         type: 'iframe' // this overrides default type
                       },

                       {
                         src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                         type: 'inline'
                       },
                       {
                         src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                         type: 'inline'
                       },
                       {
                         src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                         type: 'inline'
                       }
                       */
                     ],
                     gallery: {
                       enabled: true
                     },
                     type: 'image' // this is a default type
                 })

            $('#open-ds-menus').magnificPopup({
                      // mainClass: 'mfp-fade', disables zoom effect for menu popups
                      items: [
                        /*
                        {
                          src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                          type: 'inline'
                        },
                        */
                        {
                          src: 'assets/images/portfolio/img-work-menu-hwings01-normal.jpg',
                         title: ''
                        },
                        {
                          src: 'assets/images/portfolio/img-work-menu-hwings02-normal.jpg',
                         title: ''
                       },
                         {
                           src: 'assets/images/portfolio/img-work-menu-hwings03-normal.jpg',
                          title: ''
                        },
                        {
                          src: 'assets/images/portfolio/img-work-menu-hwings04-normal.jpg',
                         title: ''
                        },
                        {
                          src: 'https://vimeo.com/214556032',  // src: 'https://vimeo.com/234386391',
                          type: 'iframe'
                        },
                        {
                          src: 'assets/images/portfolio/img-work-menu-blazin01-normal.jpg',
                         title: ''
                       },
                         {
                           src: 'assets/images/portfolio/img-work-menu-blazin02-normal.jpg',
                          title: ''
                        },
                        {
                          src: 'assets/images/portfolio/img-work-menu-blazin03-normal.jpg',
                         title: ''
                       },
                       {
                         src: 'assets/images/portfolio/img-work-menu-raven01-normal.jpg',
                        title: ''
                       },
                         {
                           src: 'assets/images/portfolio/img-work-menu-raven02-normal.jpg',
                          title: ''
                         },
                         {
                           src: 'assets/images/portfolio/img-work-menu-raven03-normal.jpg',
                          title: ''
                         }
                        /*
                        {
                          src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                          type: 'iframe' // this overrides default type
                        },

                        {
                          src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                          type: 'inline'
                        },
                        {
                          src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                          type: 'inline'
                        },
                        {
                          src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                          type: 'inline'
                        }
                        */
                      ],
                      gallery: {
                        enabled: true
                      },
                      type: 'image' // this is a default type
                  })

            $('#open-ds-promos').magnificPopup({
                        // mainClass: 'mfp-fade', disables zoom effect for menu popups
                        items: [
                          /*
                          {
                            src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                            type: 'inline'
                          },
                          */
                          {
                            src: 'assets/images/portfolio/img-work-promo-digtialposters01-normal.jpg',
                           title: ''
                          },
                          {
                            src: 'https://www.youtube.com/watch?v=E5R5G-jnfwA', // src: 'https://vimeo.com/214556032',
                            type: 'iframe' // this overrides default type
                          },
                          {
                            src: 'assets/images/portfolio/img-work-promo-york-catering-3ft-normal.jpg',
                           title: ''
                         },
                           {
                             src: 'assets/images/portfolio/img-work-promo-york-ice-catering-normal.jpg',
                            title: ''
                          }

                          /*


                          {
                            src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                            type: 'inline'
                          },
                          {
                            src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                            type: 'inline'
                          },
                          {
                            src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                            type: 'inline'
                          }
                          */
                        ],
                        gallery: {
                          enabled: true
                        },
                        type: 'image' // this is a default type
                    })





















           // Define data for the popup
           // Popup with mixed content types
           // https://codepen.io/dimsemenov/pen/vKrqs

           // Popup with mixed content types
           $('#open-videos-images').magnificPopup({
               // mainClass: 'mfp-fade', disables zoom effect for menu popups
               items: [
                {
                  src: 'https://www.youtube.com/watch?v=fj9CEMw162A',
                  type: 'iframe' // this overrides default type
                },
                {
                 src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                 type: 'iframe' // this overrides default type
                },
                {
                 src: 'https://www.thinkjon.com/new-js-code/assets/images/portfolio/img-work01-normal.jpg',
                 title: ''
                },
                {
                 src: 'https://www.thinkjon.com/new-js-code/assets/images/portfolio/img-work02-normal.jpg',
                 title: ''
                },
                {
                 src: 'https://www.thinkjon.com/new-js-code/assets/images/portfolio/img-work03-normal.jpg',
                 title: ''
                }
                /*
                {
                 src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                 type: 'inline'
                }
                */

               ],
               gallery: {
                 enabled: true
               },
               type: 'image' // this is a default type
           });


           // Popup with mixed content types
           $('#open-digital-signage-videos').magnificPopup({
               // mainClass: 'mfp-fade', disables zoom effect for menu popups
               items: [
                 {
                   src: 'https://www.youtube.com/watch?v=7SxIQ3TunYs',
                   type: 'iframe' // https://youtu.be/K-p-IAO-8jw  |    https://player.vimeo.com/video/231553843
                 },
                {
                  src: 'https://www.youtube.com/watch?v=fj9CEMw162A',
                  type: 'iframe' // this overrides default type
                },
                {
                 src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                 type: 'iframe' // this overrides default type
                }
                /*
                {
                 src: 'https://www.thinkjon.com/new-js-code/assets/images/portfolio/img-work01-normal.jpg',
                 title: ''
                },
                {
                 src: 'https://www.thinkjon.com/new-js-code/assets/images/portfolio/img-work02-normal.jpg',
                 title: ''
                },
                {
                 src: 'https://www.thinkjon.com/new-js-code/assets/images/portfolio/img-work03-normal.jpg',
                 title: ''
                },
                {
                 src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                 type: 'inline'
               }
               */

               ],
               gallery: {
                 enabled: true
               },
               type: 'image' // this is a default type
           });



           $('#open-digital-signage-photos').magnificPopup({
               // mainClass: 'mfp-fade', disables zoom effect for menu popups
               items: [
                 /*
                 {
                   src: '<div style="width: 900px; height:600px; backgroundColor: #ccc; border: 2px red solid; margin: 0 auto;"><a href="open-digital-signage-stills"><div style="width 150px; height:300px; backgroundColor: #eee;">Menu Stills</div></a><a href="open-digital-signage-reel"><div style="width 150px; hieght:300px; backgroundColor: #eee;">Demo Reel</div></a><a href="#"><div style="width 150px; hieght:300px; backgroundColor: #eee;"">thinimg 01<div></a></div>', // HTML string
                   type: 'inline'
                 },
                 */
                 {
                   src: 'https://www.thinkjon.com/new-js-code/assets/images/portfolio/img-work01-normal.jpg',
                   title: ''
                 },
                 {
                   src: 'https://www.thinkjon.com/assets/images/portfolio/img-work-menu-blazin01-normal.jpg',
                   title: ''
                 },
                 {
                   src: 'https://www.thinkjon.com/assets/images/portfolio/img-work-menu-blazin02-normal.jpg',
                   title: ''
                 },
                  {
                   src: 'https://www.thinkjon.com/assets/images/portfolio/img-work-menu-blazin03-normal.jpg',
                   title: '' // this overrides default type
                 }
                 /*
                 {
                   src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
                   type: 'iframe' // this overrides default type
                 },

                 {
                   src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
                   type: 'inline'
                 },
                 {
                   src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
                   type: 'inline'
                 },
                 {
                   src: '#my-popup', // CSS selector of an element on page that should be used as a popup
                   type: 'inline'
                 }
                 */
               ],
               gallery: {
                 enabled: true
               },
               type: 'image' // this is a default type
           })


/*
        $('#open-3box-iframe').magnificPopup({
           // mainClass: 'mfp-fade', disables zoom effect for menu popups
           items: [
             {
               src: 'digital-signage.html',
               type: 'iframe' // this overrides default type
             },
             {
               src: 'https://www.thinkjon.com/new-js-code/assets/images/portfolio/img-work03-normal.jpg',
               title: ''
             },
             {
               src: 'https://www.youtube.com/watch?v=etf-gUR4Z7w',
               type: 'iframe' // this overrides default type
             }

           ],
           gallery: {
             enabled: true
           },
           type: 'image' // this is a default type
       });
*/
