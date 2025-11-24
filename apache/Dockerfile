FROM httpd:alpine

RUN sed -i \
    -e 's/#LoadModule status_module/LoadModule status_module/' \
    -e 's/#LoadModule info_module/LoadModule info_module/' \
    conf/httpd.conf

RUN echo "<Location /server-status>" >> conf/httpd.conf && \
    echo "    SetHandler server-status" >> conf/httpd.conf && \
    echo "    Require all granted" >> conf/httpd.conf && \
    echo "</Location>" >> conf/httpd.conf