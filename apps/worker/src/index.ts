import { Queue } from 'bullmq';
import IORedis from 'ioredis';

const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');
const queue = new Queue('default', { connection });

async function main() {
  await queue.add('hello', { msg: 'worker ready' });
  console.log('Worker initialised');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
