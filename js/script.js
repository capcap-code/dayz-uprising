const button = document.getElementById('joinBtn');

    // Function to handle mouse enter event
    function handleMouseEnter() {
      button.style.backgroundColor = '#ff5f00'; // Change background color on hover
    }

    // Function to handle mouse leave event
    function handleMouseLeave() {
      button.style.backgroundColor = '#f70000'; // Revert to original background color
    }

    // Add event listeners for mouse enter and leave events
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    document.addEventListener('DOMContentLoaded', function() {
        // Create video element
        var video = document.createElement('video');
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.setAttribute('loop', '');
        video.setAttribute('playsinline', '');
        video.style.position = 'fixed';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
      
        // Create source element
        var source = document.createElement('source');
        source.setAttribute('src', 'assets/background/bgVideo.mp4'); // Specify the path to your video file
        source.setAttribute('type', 'video/mp4');
        
        // Append source element to video element
        video.appendChild(source);
        video.addEventListener('error', function() {
            console.error('Error loading the video:', video.error);
          });
        video.addEventListener('loadedmetadata', function() {
          video.currentTime = 148; // Example: Start from 30 seconds into the video
        });
        document.getElementById('feature-link').addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default behavior of anchor link
          document.getElementById('home-page').style.opacity = '0'; // Hide home container
          document.getElementById('game-features').style.opacity = '1'; // Display feature container
          setTimeout(function() {
            document.getElementById('home-page').style.display = 'none'; // Hide home container after transition
          }, 500); // Delay hiding by 500ms (equal to transition duration)
        });
    
        document.getElementById('home-link').addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default behavior of anchor link
          document.getElementById('game-features').style.opacity = '0'; // Hide feature container
          document.getElementById('home-page').style.display = 'block'; // Display home container
          setTimeout(function() {
            document.getElementById('home-page').style.opacity = '1'; // Show home container after transition
          }, 10); // Small delay to ensure proper transition
        });
        // Append video element to the background container
        document.querySelector('.background-video-container').appendChild(video);
      });
      

      