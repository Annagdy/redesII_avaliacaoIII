import http from 'k6/http';
import { check, sleep } from 'k6';

const token = open('/src_data/token.txt').trim();

export const options = {
  stages: [
    { duration: '2m', target: 100 },  // AQUECIMENTO: Sobe suavemente para 100 utilizadores
    { duration: '26m',  target: 100 }, // PLATÔ: Mantém 100 utilizadores a bater forte
    { duration: '2m', target: 0 },   // ARREFECIMENTO: Desce para 0
  ],
  
  thresholds: {
    http_req_duration: ['p(95)<2000'], 
    http_req_failed: ['rate<0.01'], 
  },
};

export default function () {
  const ip_alvo = __ENV.ALVO || 'http://58.17.0.2'; 
  
  const url = ip_alvo;

  const params = {
    headers: {
      'X-Custom-ID': token,
      'User-Agent': 'K6-Load-Test-Student',
    },
  };

  const res = http.get(url, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}