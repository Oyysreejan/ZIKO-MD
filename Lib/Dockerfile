FROM quay.io/Oyysreejan/ZIKO-MD:latest
RUN git clone https://github.com/Oyysreejan/ZIKO-MD /root/bot/
WORKDIR /root/bot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
