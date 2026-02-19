function detectBruteForce(logs) {
  if (!Array.isArray(logs)) return [];

  const failureCount = {};
  const suspiciousIPs = new Set();

  for (const log of logs) {
    const [ip, status] = log.split(" ");

    if (!failureCount[ip]) {
      failureCount[ip] = 0;
    }

    if (status === "LOGIN_FAIL") {
      failureCount[ip]++;

      if (failureCount[ip] >= 3) {
        suspiciousIPs.add(ip);
      }
    }

    if (status === "LOGIN_SUCCESS") {
      failureCount[ip] = 0; // reset on success
    }
  }

  return [...suspiciousIPs].sort();
}
