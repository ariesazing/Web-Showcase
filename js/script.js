$(document).ready(function() {
  // Initialize loading screen
  initLoadingScreen();
  
  function initLoadingScreen() {
  // Show loading screen immediately
  $('#loading-screen').css('display', 'flex');
  
  // Force animations to start
  $('.spinner-particle').css('animation', 'none');
  setTimeout(function() {
    $('.spinner-particle').css('animation', '');
  }, 10);

    // Animate loading content in
    $('.loading-content').animate({
      'opacity': '1',
      'transform': 'translateY(0)'
    }, 800, 'easeOutCubic');
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(function() {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
        
        // When loading complete
        setTimeout(function() {
          $('.loading-text').text('Ready!');
          
          // Remove preload class to enable animations
          $('body').removeClass('preload');
          
          // Initialize all other effects
          initializeAllEffects();
          
          // Fade out loading screen
          $('#loading-screen').addClass('fade-out');
          
          // Remove loading screen after fade completes
          setTimeout(function() {
            $('#loading-screen').remove();
          }, 1200);
        }, 300);
      }
      $('.progress-bar').css('width', progress + '%');
      updateLoadingText(progress);
    }, 200);
    
    function updateLoadingText(progress) {
      if (progress < 30) {
        $('.loading-text').text('Loading assets...');
      } else if (progress < 60) {
        $('.loading-text').text('Initializing components...');
      } else if (progress < 90) {
        $('.loading-text').text('Finalizing setup...');
      } else {
        $('.loading-text').text('Ready to explore!');
      }
    }
  }

  function initializeAllEffects() {
    // ─────────────────────────────────────────────────────────────────
    // Sticky Navigation (It follows the screen when you scroll)
    // ─────────────────────────────────────────────────────────────────
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 50) {
        $("nav").addClass("scrolled");
      } else {
        $("nav").removeClass("scrolled");
      }
    });

    // ─────────────────────────────
    // Notification Banner
    // ─────────────────────────────
    $('#notification-banner').slideDown().delay(5000).slideUp();

    // ───────────────────────────────────────────────
    // Dashboard/Sections Loading effects
    // ─────────────────────────────────────────────────
    $('.section').each(function(index) {
      const $this = $(this);
      $this.data("original", {
        left: $this.position().left
      });
      $this.delay(200 * index).animate({
        left: '20px',
        opacity: '1'
      }, function() {
        const original = $this.data("original");
        $this.animate({ left: original.left }, 500);
      });
    });

    // ─────────────────────────────
    // Hero Section Animations
    // ─────────────────────────────
    $(".hero-text, .hero-image").css("display", "none");
    $(".hero-text").fadeIn(1000);
    $(".hero-image").delay(500).slideDown(1000)
      .animate({ opacity: 1, marginTop: "20px" }, 400, "swing");

    // ─────────────────────────────
    // Profile Section Toggle
    // ─────────────────────────────
    $('#toggle-profile').click(function() {
      $('#profile-card').slideToggle({easing: "easeOutBounce"});
    });

    // ─────────────────────────────
    // Feature Toggle Buttons (+/-)
    // ─────────────────────────────
    $('.toggle-detail').click(function() {
      const $btn = $(this);
      const $detail = $btn.closest('.feature').find('.feature-detail');
      $detail.slideToggle(300, function() {
        const isVisible = $(this).is(':visible');
        $btn.text(isVisible ? '-' : '+');
      });
    });

    // ─────────────────────────────
    // Feature Title Slide Toggle
    // ─────────────────────────────
    $('.feature-title').click(function() {
      $(this).next('.feature-detail').slideToggle();
    });

    // ─────────────────────────────
    // FAQ Accordion Behavior
    // ─────────────────────────────
    $('.question').click(function() {
      const $answer = $(this).next('.answer');
      if ($answer.is(':visible')) {
        $answer.stop(true, true).slideUp(300);
      } else {
        $('.answer').not($answer).stop(true, true).slideUp(300);
        $answer.stop(true, true).slideDown(300);
      }
    });

    // ─────────────────────────────
    // Gallery Animation Toggle
    // ─────────────────────────────
    $('#animate-gallery').stop().on("click", function() {
      $('.gallery-img').each(function(i) {
        $(this)
          .delay(i * 150)
          .fadeTo(300, 1)
          .animate({ width: '200px', height: '200px', marginLeft: '30px' }, 500,
            function() {
              $(this)
                .delay(100)
                .animate({ width: '150px', height: '150px', marginLeft: '0px' }, 500)
                .fadeTo(300, 0.3);
            });
      });
    });

    $(".gallery-img").hover(
      function() {
        $(this).css({
          transition: "transform 0.5s ease, margin 0.5s ease, opacity 0.5s ease",
          margin: "60px",
          transform: "scale(1.5)",
          opacity: "1",
          boxShadow: "0 0 12px rgba(129, 220, 238, 0.4)"
        });
      },
      function() {
        $(this).css({
          margin: "0px",
          transform: "scale(1)",
          opacity: "0.4",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0)"
        });
      }
    );
  }
});

    // ─────────────────────────────
    // Enhanced Dashboard Animations
    // ─────────────────────────────
    
    // Store original positions and sizes
    $('.image-box').each(function() {
      const $box = $(this);
      $box.data('original', {
        left: $box.position().left,
        top: $box.position().top,
        width: $box.width(),
        height: $box.height(),
        rotate: 0
      });
    });

    // Scatter animation with size changes
    $('#shift-boxes').click(function() {
      $('.image-box').each(function(index) {
        const $box = $(this);
        const sizeClasses = ['size-small', 'size-medium', 'size-large'];
        const randomSize = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
        
        // Remove any existing size classes
        $box.removeClass('size-small size-medium size-large');
        
        // Chain multiple animations
        $box.stop(true, true)
          .delay(index * 100)
          .addClass('scattered')
          .addClass(randomSize)
          .css({
            'position': 'relative',
            'transition': 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          })
          .animate({
            left: Math.random() * 200 - 100,
            top: Math.random() * 100 - 50,
            rotate: Math.random() * 60 - 30
          }, {
            duration: 800,
            easing: 'easeOutBack',
            queue: false,
            complete: function() {
              // Add wobble effect after positioning
              $box.css('animation', 'wobble 0.5s ease 2');
              setTimeout(() => {
                $box.css('animation', '');
              }, 1200);
            }
          });
      });
    });

    // Reset animation with smooth return
    $('#reset-boxes').click(function() {
      $('.image-box').each(function(index) {
        const $box = $(this);
        const original = $box.data('original');
        
        // Chain multiple animations
        $box.stop(true, true)
          .delay(index * 50)
          .animate({
            left: original.left,
            top: original.top,
            rotate: original.rotate
          }, {
            duration: 1000,
            easing: 'easeInOutBack',
            queue: false,
            start: function() {
              $box.css('animation', 'pulse 0.5s ease');
            },
            progress: function() {
              // Gradually remove size class during reset
              const progress = (1 - this.progress).toFixed(2);
              $box.css('transform', `scale(${1 + progress * 0.1})`);
            },
            complete: function() {
              $box.removeClass('scattered size-small size-medium size-large')
                .css({
                  'left': '',
                  'top': '',
                  'position': '',
                  'animation': '',
                  'transform': '',
                  'width': '',
                  'height': ''
                });
            }
          });
      });
    });

    // Randomize images with chained effects
    $('#randomize-images').click(function() {
      const $boxes = $('.image-box');
      const images = $boxes.find('img').toArray();
      
      // Shuffle images
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i].src, images[j].src] = [images[j].src, images[i].src];
      }
      
      // Chain animations
      $boxes.each(function(index) {
        $(this).stop(true, true)
          .delay(index * 150)
          .css('transform', 'scale(0.8) rotate(10deg)')
          .animate({
            opacity: 0.3,
            rotate: '-=20'
          }, 300)
          .animate({
            opacity: 1,
            rotate: '+=10',
            transform: 'scale(1) rotate(0deg)'
          }, 400);
      });
    });

    // Enhanced click animation
    $('.image-box').on('click', function() {
      const $box = $(this);
      $box.stop(true, true)
        .css('z-index', '20')
        .animate({
          scale: '1.2',
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)'
        }, {
          duration: 200,
          easing: 'easeOutQuad',
          queue: false
        })
        .animate({
          rotate: `${Math.random() * 20 - 10}deg`
        }, 300)
        .animate({
          scale: '1',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          rotate: '0deg'
        }, {
          duration: 400,
          easing: 'easeOutElastic',
          complete: function() {
            $box.css('z-index', '');
          }
        });
    });

        // Hamburger Menu Toggle
    $('.hamburger').click(function() {
      $(this).toggleClass('active');
      $('.nav-links').toggleClass('active');
      
      // Disable scroll when menu is open
      $('body').toggleClass('no-scroll');
    });
    
    // Close menu when clicking a link
    $('.nav-links a').click(function() {
      $('.hamburger').removeClass('active');
      $('.nav-links').removeClass('active');
      $('body').removeClass('no-scroll');
    });

    particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00d4ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#00d4ff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});