//http://victorblog.com/html5-canvas-gradient-creator/ - help to generate gradiants
//


var SpinWheelSkins = SpinWheelSkins || {} ;

SpinWheelSkins.prototype = $.extend(SpinWheelSkins, {
    wood: {
        outerCircle: { pattern: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wAARCAAyADIDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUEBgcDAgj/xAA4EAACAQMDAQcBBQUJAAAAAAABAgMEBREABiESExQiMUFRYRUHcZGhsRYjgdHxJTI0NUJSYmPw/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQcF/8QAJxEAAQMCAwkBAQAAAAAAAAAAAQACEQPwEiIxEyEyQUJRYXGRI8H/2gAMAwEAAhEDEQA/APru23VJ65aS33dVno545aylR+tujtGVB7jjDY+R8a0eru9VLuq+S96Znhpo5SOojHgX+esj25a7dQbjuTPb6dK2oghPeCOlyVYEcjz5GMfd7autVcYmuu6u60z1tYYxCIIIyXbpVR0jyGSQQMka4DSdk33qupVWy/Leitu42mgulgMrFZHkw7A+vZnjOl7VdRFaYEDNGqTygPnAbIP8tctyvJLVW8senoqImVTyVJjbjS+5zSR7aqOzbxLWVXSD7gEKPxI1U8txugKdk4GrvUz1U+6Y5BNIEp4Co58jhyfyI1x3Hea+kulrplqpYxWWrEbscKXWVivPvkfmNL7PXPUw7jV16TS1UidWPPCjP4HI0x3bHeWs9C9qoIasQ2eZo3mmSMRSlSUJycnPI4HGDnz0vVhMXKZMVADe5VP9ralB0vWsjjhlJXg+2jWXLVbvniWebbtsaaQdchErcseT/p99Gptp4V2yHcfVq6d1p7/b7jUsVXs4omxgeMklQP46t6MEu27UjbJjXt1IPIIww/8AfOqXdLJBcaqyxTxMZoayKWLkkArg549s/rq50kRG5d4ZII7sVI++Iapp891wVA+IBvUKVuOdJbxSuSAHrYzhfIfuycfnqh7xrnotoVMkbSLMLpPJF2bhQOcjqJ9MjVnutUlRcl6OkmKvBYg8D93/AE1X662Ut92rUvVRrU9NymXpPkcNnn0OiecZMI6UMDSeSpf2NfX32fe6i/zzTTV880sJqJxKxXpCk8cAFskAceuTnWzbjrIkpLXb1aJpZbYGJZD1AAYyp8h58+/l6aSJTPb9y2ynhiRYJ6aVAirjlSD+h1R963+50/2+7EtVDSNUwSWfM+DgIvaMpZvfGAB8nRTgpkelrv3r4h2J+K1x0QECBZ/CFAHGjXFYX6B0yv0445Plo1uXskZp1TKpaaO8WiZBx2oRsH3Kj9NWCnQJu/dCMMmSl6uPXMQ/DSyJ46i0xzjhY5CSRyRjpOp87Abp3FKpJf6WmAeBkxjGtY3nfNC47ovULAtgSbt7W4pfYSUeuJi6yBgKHUEYJ4Kgffjy1sNpgK7TdD/e+pVPUM+39NQYKLu1BSphY8RNUOo8izEgfgB+emFDIy7ckOcO9ZUnkeWc4/TS6bA0QrK1TaGYhRN87hs+1N7bEluE8qPVVhi6Ioy5w6MhPwAxTOnl0hoJ793mhRO0SjWISty4iVmbGfbLZ49tKty2i33LeVuudwi729DDG1MrnIRyxAYD0OC2ffj2Gm70iNQPXQjwGNwVPoTnj7vLTyDicpcoY2NY/qrxpmDHx+vzo167c/700anhbKZW/wDymtHp2bcfw1KqmYX294JH9nJ6/wDWujRprOG/KB3FfhKqhm7fGTju0fr86jUjN9FfxH/GVHr8nRo0vqTelTL47i1RMGPV4Oc/8tOkJ/Y6YZOOzX1+Do0af1n0kHgHtZs7uJnAcgZPro0aNeYql//Z", margin: 10, shadow: { type: 'outer' } },
        slice: { pattern: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wAARCAAyADIDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAQFBgIDCf/EADgQAAIBAwMCAQkECwEAAAAAAAECAwAEEQUSITFBEyIyUWFxgZGhsQYUM2IVIyQlQlJywcPR4fD/xAAbAQACAwADAAAAAAAAAAAAAAAAAwEEBQIHCP/EACgRAAIBAgUDAwUAAAAAAAAAAAECAAMREiExMvAjQVEEEzNScYGx4f/aAAwDAQACEQMRAD8A+ql3qFxHpd4FiR4mtZGXJ5DE4Gc9hgGpW6UeIoleQhsFz5JfaAOab1liumzqi48gd/zjJ+FIq4dLgAj8Vioz6RXnytWZqlrzsOjTAp3AnJutuv2MhlODImeOeEOR8aYtZJI725jQHaiuVAXgAPgD4Cp8rAy3UkasTsKg+cc4bn2cdadtp3l1Vpg4Ba1K4A7k/wDjSKZzuT3lhxlp2i0UrNrtiwJ2yW7lgDnGWORmqdo0NvEs6MZHa43TomThs9B7Rk49dLRwCLVNLIQwr93PkZyFO/nHqPWnxbLDeFPGDBpkcqB5mSQBnoeKBiDG3MhBmUgDmplg38hckSLjPGSKK6+7Io2hEIHHniitLqfVM69PxImoOjfpJ+SkUa497/8Aaj2SiWCY7TgQlyc852GmtTYyadqcQBSQ2jYPTDBgQfr86n2kwea6RSqhrEvjOOcdvjWPVbrC80aSn2Dbmka06MTT3MYZlIQOx692GB6ua7tpIY52cDw1WAbicYHfJz7K99ObwjfbojIrRBQOi43Dv1qPZLJdvdxPIV8SAqcjnIU4oW6gASdzMToLS7cTLJ9oNMuI+Va3YnHmk7uw9FUpYo/Dtntz4kbAYYHJJ3nv3x091Z1B+8tNV5N+IiDgYHb51fNxmcksW8O4KnCADOAeMcdT8qbTYs7E8yERUXCq25nGd4/iQ7u/I60VMlu0F1IN+MMfR6aKte+B3ix6diL2ibvn7Q3W7a8ciGLaPWCAPjWS0meYzRK5/WfcmVsc8gEH5itJdoZrS7AKh3PBODjr/usppLIt7ZykZLwScA9wTkVmVTeov3mjRHSbmgmyhMctrPAxbLbVO1sfyn6n30rpTiS4u7jJjHiMckY4J/7UybUYdP024uCpIVkBG/zidoHPbk591P6bMrWGqM5HieJsG3pk+imowLiKZGVCba/yM25LXNrKeGWVlyVIPnEZx7qrSyidIYlOCrHLHjcckk/T4Vnbu7WO/HksJFfv2Iz/AH+tPS3KyTgIBlQ5IHtH+/lUK+EtaD0y2EkRQrIxLdc8+caKXWQiNQWXgd6KMQjsBj2SJQQSD4n+OsdpP4dh/RPRRSKm4c8RlDY34/RnnqPNpbIeUcxh1PRhgdfTWlsvJsdTxx+1Y49tFFcKPyHnmWKvwjniTZyTcZPJy/J9tUbYk6tfEkk+LJzn8woooGpi22icDpRRRTpIn//Z", margin: 20, offset: 2, shadow: { type: 'outer', blur: 2 }, text: { color: '#9F6D3E', font: 'Arial', font_size: 10, shadow: { blur: 6, color: '#ffffff' } } },
        innerCircle: [
            {  pattern: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wAARCAAyADIDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUEBgcDAgj/xAA4EAACAQMDAQcBBQUJAAAAAAABAgMEBREABiESExQiMUFRYRUHcZGhsRYjgdHxJTI0NUJSYmPw/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQcF/8QAJxEAAQMCAwkBAQAAAAAAAAAAAQACEQPwEiIxEyEyQUJRYXGRI8H/2gAMAwEAAhEDEQA/APru23VJ65aS33dVno545aylR+tujtGVB7jjDY+R8a0eru9VLuq+S96Znhpo5SOojHgX+esj25a7dQbjuTPb6dK2oghPeCOlyVYEcjz5GMfd7autVcYmuu6u60z1tYYxCIIIyXbpVR0jyGSQQMka4DSdk33qupVWy/Leitu42mgulgMrFZHkw7A+vZnjOl7VdRFaYEDNGqTygPnAbIP8tctyvJLVW8senoqImVTyVJjbjS+5zSR7aqOzbxLWVXSD7gEKPxI1U8txugKdk4GrvUz1U+6Y5BNIEp4Co58jhyfyI1x3Hea+kulrplqpYxWWrEbscKXWVivPvkfmNL7PXPUw7jV16TS1UidWPPCjP4HI0x3bHeWs9C9qoIasQ2eZo3mmSMRSlSUJycnPI4HGDnz0vVhMXKZMVADe5VP9ralB0vWsjjhlJXg+2jWXLVbvniWebbtsaaQdchErcseT/p99Gptp4V2yHcfVq6d1p7/b7jUsVXs4omxgeMklQP46t6MEu27UjbJjXt1IPIIww/8AfOqXdLJBcaqyxTxMZoayKWLkkArg549s/rq50kRG5d4ZII7sVI++Iapp891wVA+IBvUKVuOdJbxSuSAHrYzhfIfuycfnqh7xrnotoVMkbSLMLpPJF2bhQOcjqJ9MjVnutUlRcl6OkmKvBYg8D93/AE1X662Ut92rUvVRrU9NymXpPkcNnn0OiecZMI6UMDSeSpf2NfX32fe6i/zzTTV880sJqJxKxXpCk8cAFskAceuTnWzbjrIkpLXb1aJpZbYGJZD1AAYyp8h58+/l6aSJTPb9y2ynhiRYJ6aVAirjlSD+h1R963+50/2+7EtVDSNUwSWfM+DgIvaMpZvfGAB8nRTgpkelrv3r4h2J+K1x0QECBZ/CFAHGjXFYX6B0yv0445Plo1uXskZp1TKpaaO8WiZBx2oRsH3Kj9NWCnQJu/dCMMmSl6uPXMQ/DSyJ46i0xzjhY5CSRyRjpOp87Abp3FKpJf6WmAeBkxjGtY3nfNC47ovULAtgSbt7W4pfYSUeuJi6yBgKHUEYJ4Kgffjy1sNpgK7TdD/e+pVPUM+39NQYKLu1BSphY8RNUOo8izEgfgB+emFDIy7ckOcO9ZUnkeWc4/TS6bA0QrK1TaGYhRN87hs+1N7bEluE8qPVVhi6Ioy5w6MhPwAxTOnl0hoJ793mhRO0SjWISty4iVmbGfbLZ49tKty2i33LeVuudwi729DDG1MrnIRyxAYD0OC2ffj2Gm70iNQPXQjwGNwVPoTnj7vLTyDicpcoY2NY/qrxpmDHx+vzo167c/700anhbKZW/wDymtHp2bcfw1KqmYX294JH9nJ6/wDWujRprOG/KB3FfhKqhm7fGTju0fr86jUjN9FfxH/GVHr8nRo0vqTelTL47i1RMGPV4Oc/8tOkJ/Y6YZOOzX1+Do0af1n0kHgHtZs7uJnAcgZPro0aNeYql//Z", margin: 80, shadow: { type: 'inner' } },
            {  pattern: "data:image/jpeg;base64,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", margin: 85, shadow: { type: 'outer' } }
        ],
        arrow: { image: '<svg height="1024" width="640" xmlns="http://www.w3.org/2000/svg" style="fill:green;"><defs><filter id="f3" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" /><feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" />   </filter></defs><path  filter="url(#f3)" d="M320 0C143.219 0 0 143.21900000000005 0 320s320 704 320 704 320-527.219 320-704S496.75 0 320 0zM320 448c-70.656 0-128-57.344-128-128s57.344-128 128-128c70.625 0 128 57.344 128 128S390.625 448 320 448z"/><ellipse stroke="#000" ry="128.999996" rx="128" id="svg_2" cy="319.999996" cx="319.5" stroke-width="1.5"  style="fill:#E91E63;"/></svg>', color: ['#bee552', '#52c0e5'] },
    }
});

//

///9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwOUU4MTkzQjQyNDExRTg5RTEzRTU0RTQyMkNDNkRGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwOUU4MTkyQjQyNDExRTg5RTEzRTU0RTQyMkNDNkRGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI4MDc4NUNEMDgwNkFGOUM5NzNFOUJBRkMyMUU2RUZGQSIgc3RSZWY6ZG9jdW1lbnRJRD0iODA3ODVDRDA4MDZBRjlDOTczRTlCQUZDMjFFNkVGRkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAWkAAAGPAAAB4kAAAkX/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAyADIDAREAAhEBAxEB/8QAuQAAAwEBAQEBAAAAAAAAAAAABAUGAgMBAAcBAQEBAQEBAAAAAAAAAAAAAAACAQMEBRAAAQIFAwMFAAAAAAAAAAAAAQADESECMgQgIjMQMRMwUCNDRBEAAQMBBQcCBwAAAAAAAAAAAAERAgMhMVFxgUFhscFicoIQEpGhMkJSooMSAQAAAAAAAAAAAAAAAAAAAFATAQACAgECBQUBAQEAAAAAAAEAESExQRBhIFFxodHwgZGxweHxMP/aAAwDAQACEQMRAAAB/VPn+2exZzqfSoZ4IzfusJCqikgKdp0+d36OSHNq4pDgMMPJph25z5ZTszOijQ4TRnaFLKnnUueaZYCmu/WFpU86nNaY0wJlY6QvKvnU5rAyZjK//9oACAEBAAEFAgI0tjfSPlyzF1pUqSpKavavzTux5FqMEAmyBlUjfl24xKbu8hVMS3RLJmVl8WJNfpgFST4/uBm9xYlkI1oHYeY93+LHlTTMwVfE7z1X5XAza33X/9oACAECAAEFAtB1nWfWOs6z1//aAAgBAwABBQL3H//aAAgBAgIGPwJH/9oACAEDAgY/Akf/2gAIAQEBBj8Cp7kUTOImhPpkL3OKqI7+0v8AtIbn4EkxZxc0KstnuJ7rCKdSG00WwU+KksIyKj32ipgxoO9sYq+qkiS4QYnmSzKmDpw9JlTdJCSdBN/zYnqVvHgfzFe5VUqp1RY8CfdeSUr5Rb5n6FPLmS74G36Be/mSvv5lXxNT/9oACAEBAwE/IW7m+rUa6tN+XOYSN6PdmONKDr7wjhlRTt9blmuoNd64lex0fmNgZqT0U+0OY5OXvLiXdgV5GPaBQwDX3uAEaHsLYkU3nfvUvtpHA4cA5KrcAdXR6cRgGq/wiG1wb+2Y485T0cSwIBOb3LMTufj/ALLh0o/k4JwNqgvowE8kEV0ut46VxnvyHMoPTrxRHralx1d+1bg5b7DuxO6wlmlwXpiCvM+dxWLXyRM+fk5iC8H72lZjDlfzXH93D3iouK5c5D2mXa+bJVBhR7roT0cflPre6fXe09o3rme1/r0Q7rf6T8T/AP/aAAgBAgMBPyGOunPRx4Dq46v/AIiPhuHhOuh4DHoTTr//2gAIAQMDAT8h68Q8L0PGR8R4mHgOjDqeAj0//9oADAMBAAIRAxEAABBIpemyDN+ZU+1ZIXe0WSdhVBVf/9oACAEBAwE/EGa84XfB9pQoBmymvsmLjsANr3P1AJja62x+ZQCYaat7aihlYwW3n9M7uZqZq1dwfhEsNVs5fLAxIXjcBl73KaRceEF1Zwk3I4N3yeWBn1TqKFuHl/6SrggRPv5fKXBscpXMYkEBe6RdpLRrgKfuFZJHDaHundcPlFwFiKvCIQl0d1/HUQlAwrv/ALAcF2I518w04Aa2Q/KUMNNNNz3nY+CA11LbW0Cu2SlsJt7wyAxNeMyyUXgIaVSB6sldLDJ5I1fPbQnb2jA/QGWurZFLBRmTA2rMKN3I/wDGS7aypRViv6e0G8gzsge5PpGfd+g1v/4Se0ifRfJqf2319P8A/9oACAECAwE/EHbBhAzHaLEFi2I2xuqm0cqzSFsUx2zSEHMtUDEuLuJid4LhomK6LuOocOo66LligY4sS7JU5TSc9Qa6f//aAAgBAwMBPxA0Q2xcQ0hzELmIOCG5pDQTaNXLhohGM2m0qBqHRYretahuJ0bw30DBBmVBBmaem0NziM3m3T//2Q==