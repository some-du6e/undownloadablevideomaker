#
def format(url):
    url = url.replace("https://", "")

    print("URL: " + url)
    return url

def formatfinal(url):
    url = url.replace("%2f", "/")
    url = "https://" + url

    print("URL2: " + url)
    return url

def listToString(s):
    str1 = ""
    for ele in s:
        str1 += ele
    return str1

def main():
    linklist = [] # lmk if there is a better way to do this
    link = input("Enter link: ")
    link = format(link)
    for i in range(len(link)):
        hexstring = "%" + link[i].encode("utf-8").hex()
        linklist += hexstring

    link = listToString(linklist)
    link = formatfinal(link)
    print(link)


main()


