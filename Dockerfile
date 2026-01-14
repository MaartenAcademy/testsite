# Gebruik nginx als basis
FROM nginx:alpine

# Kopieer je website files naar nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Nginx draait automatisch op poort 80
EXPOSE 80