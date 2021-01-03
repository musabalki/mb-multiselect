<!--# mb-multiselect
## Eklentinin Amacı
##### Projelerimizde çoklu seçim yapmak için kullanabiliriz.
## Eklentinin Özellikleri
##### Tümünü ekle
##### Tek tek ekle
##### Tümünü kaldır
##### Tek tek sil -->
# [Demo](https://musabalki.github.io/mb-multiselect/)
## How to use ?
### 1. Include CSS and JS on your site
```html
<link rel="stylesheet" href="mb-multiselect.css" /> 
<script src="mb-multiselect.js"></script> // body
```
### 2. Create HTML 
```html

<div class="mb-container">
    <div class="mb-alloptions">
        <span class="mb-title">ALL OPTİONS</span>
        <ul>
            <li data-id="1">Option 1</li>
            <li data-id="2">Option 2</li>
            <li data-id="3">Option 3</li>
            <li data-id="4">Option 4</li>
        </ul>
    </div>
</div>
 
<form>
    <select name="result[]" multiple id="mb-form-select"></select>
</form>
```
![mb multiselect](https://musabalki.com/mb.png)
