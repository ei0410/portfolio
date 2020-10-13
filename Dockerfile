FROM nginx

RUN rm /usr/share/nginx/html/*.html
RUN apt-get update && apt-get upgrade -y
RUN apt-get install git -y
RUN git clone https://github.com/ei0410/portfolio.git
RUN mv portfolio/* /usr/share/nginx/html/
