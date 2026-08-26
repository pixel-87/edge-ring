(function() {
  const currentScript = document.currentScript || (function() {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  const scriptUrl = new URL(currentScript.src);
  const baseUrl = scriptUrl.origin + scriptUrl.pathname.replace(/\/embed\.js$/, '');
  const memberId = currentScript.getAttribute('data-member') || scriptUrl.searchParams.get('member') || '';
  const theme = currentScript.getAttribute('data-theme') || 'hn'; // 'hn' | 'dark' | 'minimal'

  let container = document.getElementById('edge-ring-widget');
  if (!container) {
    container = document.createElement('div');
    container.id = 'edge-ring-widget';
    currentScript.parentNode.insertBefore(container, currentScript.nextSibling);
  }

  const shadow = container.attachShadow ? container.attachShadow({ mode: 'open' }) : container;

  let bg = '#f6f6ef';
  let fg = '#222';
  let border = '#dcdcd0';
  let linkColor = '#000';

  if (theme === 'dark') {
    bg = '#1a1a1a';
    fg = '#eee';
    border = '#333';
    linkColor = '#ccc';
  } else if (theme === 'minimal') {
    bg = 'transparent';
    border = 'transparent';
  }

  const styles = `
    :host {
      display: inline-block;
      font-family: Verdana, Geneva, sans-serif;
      font-size: 9pt;
      margin: 4px 0;
    }
    .ring-box {
      background: ${bg};
      color: ${fg};
      border: 1px solid ${border};
      padding: 3px 8px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .ring-brand {
      color: #ff6600;
      font-weight: bold;
      text-decoration: none;
    }
    .ring-brand:hover {
      text-decoration: underline;
    }
    .ring-btn {
      color: ${linkColor};
      text-decoration: none;
    }
    .ring-btn:hover {
      text-decoration: underline;
      color: #ff6600;
    }
  `;

  const goUrl = (dir) => `${baseUrl}/go/?member=${encodeURIComponent(memberId)}&dir=${dir}`;
  const homeUrl = `${baseUrl}/`;

  shadow.innerHTML = `
    <style>${styles}</style>
    <div class="ring-box">
      <a href="${goUrl('prev')}" class="ring-btn" title="Previous member">[prev]</a>
      <a href="${homeUrl}" class="ring-brand" target="_blank" rel="noopener">⚡ edge-ring</a>
      <a href="${goUrl('random')}" class="ring-btn" title="Random member">[random]</a>
      <a href="${goUrl('next')}" class="ring-btn" title="Next member">[next]</a>
    </div>
  `;
})();
