function loadLogger() {
  console.log('Welcome to caineandrebekah.com!');
  console.log('To report technical issues, go to https://www.caineandrebekah.com/support');
  
  console.groupCollapsed("Location data:");
  console.info("href: " + location.href);
  console.info("protocol: " + location.protocol);
  console.info("hostName: " + location.hostname);
  console.info("host: " + location.host);
  console.info("port: " + location.port);
  console.info("pathName: " + location.pathname);
  console.info("hash: " + location.hash);
  console.info("search: " + location.search);
  console.groupEnd();
}