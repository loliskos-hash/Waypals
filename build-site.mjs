import fs from 'fs';
let h=fs.readFileSync('/home/claude/wegmarken.html','utf8');
h=h.replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis[^>]*>/,'');
h=h.replace("var SHARE_URL='https://claude.ai/artifact/Edxuy7W8uE2KoNsZ1TpQc4';","var SHARE_URL=location.origin+location.pathname;");
if(!h.includes('location.origin+location.pathname'))throw new Error('share url not replaced');
h=h.replace(/^\s*<title>[^<]*<\/title>/,'');
const head=`<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Waypals</title>
<meta name="description" content="Waypals – your friend book for the road">
<meta name="theme-color" content="#0B7F78">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Waypals">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<link rel="stylesheet" href="fonts.css">
<style>html,body{margin:0;min-height:100%}body{padding:env(safe-area-inset-top,0) env(safe-area-inset-right,0) env(safe-area-inset-bottom,0) env(safe-area-inset-left,0);font-size:14px;font-family:system-ui,sans-serif;background:#FFF8EE}img{max-width:100%}[hidden]{display:none!important}</style>
<script src="firebase-config.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js"></script>
</head><body>
<script src="shim.js"></script>
`;
const tail=`
<script>if('serviceWorker' in navigator&&location.protocol==='https:')addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})</script>
</body></html>`;
fs.writeFileSync('index.html',head+h+tail);
console.log(fs.statSync('index.html').size);
