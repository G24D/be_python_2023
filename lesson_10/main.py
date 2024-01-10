# import re

# hand = open("mbox-short.txt")
# for line in hand:
#     line = line.strip()
#     if re.search("^F..m", line):
#         print(line)


import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(("data.pr4e.org", 8080))
cmd = "GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n".encode()
mysock.send(cmd)
while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(), end="")
    mysock.close()


import urllib.request

fhand = urllib.request.urlopen("http://data.pr4e.org/romeo.txt")
for line in fhand:
    print(line.decode().strip())


import urllib.request, urllib.parse, urllib.error

img = urllib.request.urlopen("http://data.pr4e.org/cover3.jpg")
fhand = open("cover3.jpg", "wb")
fhand.write(img)
fhand.close()
