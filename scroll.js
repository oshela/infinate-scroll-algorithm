<!DOCTYPE html>
<html>
<head>
  <title>Infinite Scroll Demo</title>
  <style>
    /* Styling for the content container */
    #content {
      height: 400px;
      overflow-y: scroll;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <div id="content">
    <!-- Initial content -->
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
    <p>Item 4</p>
    <p>Item 5</p>
    <!-- End of initial content -->
  </div>

  <script>
    const content = document.getElementById('content');
    const loadMoreThreshold = 100; // Number of pixels from the bottom to trigger loading more content

    // Function to load more content
    function loadMoreContent() {
      for (let i = 1; i <= 5; i++) {
        const newItem = document.createElement('p');
        newItem.textContent = `Item ${content.children.length + i}`;
        content.appendChild(newItem);
      }
    }

    // Event listener for scrolling
    content.addEventListener('scroll', () => {
      const scrollHeight = content.scrollHeight;
      const scrollTop = content.scrollTop;
      const clientHeight = content.clientHeight;

      if (scrollHeight - scrollTop - clientHeight < loadMoreThreshold) {
        loadMoreContent();
      }
    });

    // Initial load
    loadMoreContent();
  </script>
</body>
</html>
