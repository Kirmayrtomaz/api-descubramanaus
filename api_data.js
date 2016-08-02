define({ "api": [
  {
    "type": "get",
    "url": "/categoria/:id",
    "title": "Solicitar locais pelo id da categoria",
    "name": "GetCategoria",
    "group": "Categoria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>da categoria.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "locais",
            "description": "<p>Arrai de Locais.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>Imagem do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hora",
            "description": "<p>Hora do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "preco",
            "description": "<p>Preço do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "geo",
            "description": "<p>Localização do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geo.lat",
            "description": "<p>Latitude do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geo.long",
            "description": "<p>Longitude do local.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\tlocais:[\n\t{\n\t\t\"nome\":\"teatro Amazonas\",\n\t\t \"categoria\":\"1\",\n\t\t \"geo\":{\n\t\t\tlat:\"1.999999\",\n\t\t\tlong:\"-2.0000\"\n\t\t },\n\t\t \"img\":\"enderecodaimagem.png\",\n\t\t \"horario:\":{\n\t\n\t\t }\n\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoriaNotFound",
            "description": "<p>O local não foi encontrado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CategoriaNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/categoria.js",
    "groupTitle": "Categoria"
  },
  {
    "type": "get",
    "url": "/local/:nome",
    "title": "Request User information",
    "name": "GetLocal",
    "group": "Local",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do local.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do local  .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "valor",
            "description": "<p>Preço da entreda do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endereco",
            "description": "<p>Endereço completo do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "horario",
            "description": "<p>Horario do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horario.abre",
            "description": "<p>Horario que abre o local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "horario.fecha",
            "description": "<p>Horario que fecha o local.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "categoria",
            "description": "<p>Array de categorias.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "img",
            "description": "<p>Array de imagens.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "geo",
            "description": "<p>Localização do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geo.lat",
            "description": "<p>Latitude do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geo.long",
            "description": "<p>Longitude do local.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "telefone",
            "description": "<p>Array de telefones.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "whatsapp",
            "description": "<p>Array de whatsapp.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "social",
            "description": "<p>Dados sociais</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social.facebook",
            "description": "<p>facebook do local</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social.instagram",
            "description": "<p>instagram do local</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "social.site",
            "description": "<p>site do local</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\t\"nome\" : \"Teatro Amazonas\",\n\t\"descricao\" : \"Teatro Amazonas é um teatro brasileiro localizado no largo de São Sebastião, no centro de Manaus, capital do Amazonas. O teatro, inaugurado em 1896\",\n\t\"valo\" : \"0\",\n\t\"endereco\" : \"Avenida Eduardo Ribeiro, Centro, Manaus - AM, 69025-140\",\n\t\"horario\" : {\n\t\t\"abre\":\"10:00\",\n\t\t\"fecha\":\"20:00\"\n\t}\n\t\"categoria\" : [ 1 , 2 , 3 ],\n\t\"img\" : [ \"urldaimagem.png\" , \"outraurldaimage.png\" ],\n\t\"geo\" : {\n\t\t\"lat\" : \"\",\n\t\t\"long\" : \"\"\n\t},\n\ttelefone:[\"929929292\",\"92929924721\"],\n\twhatsapp:[\"929929292\",\"92929924721\"],\n\tsocial:{\n\t\tsite:\"http://amazonas.com.br\",\n\t\tinstagram:\"instagram/teatroamazonas\",\n\t\tfacebook:\"facebook/teatroamazonas\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LocalNotfound",
            "description": "<p>Local não foi encontrando.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocalNotfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/local.js",
    "groupTitle": "Local"
  }
] });
