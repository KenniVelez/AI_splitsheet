<!DOCTYPE html>
<html>
<head>
  <title>Split Sheet Generator</title>
</head>
<body>
  <h1>Split Sheet Generator</h1>
  <p>Please fill out the form below to generate a split sheet for your song.</p>

  <form action="#" method="post">
    <label for="song_title">Song Title:</label>
    <input type="text" id="song_title" name="song_title" required><br><br>

    <label for="song_status">Song Status:</label>
    <select id="song_status" name="song_status" onchange="togglePublisher()">
      <option value="" selected disabled>Please select an option</option>
      <option value="Unreleased">Unreleased</option>
      <option value="Released">Released</option>
    </select><br><br>

    <label for="songwriters">Songwriters:</label><br>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Percent</th>
        </tr>
      </thead>
      <tbody id="songwriter_table_body">
        <tr>
          <td><input type="text" name="songwriter_name[]" required></td>
          <td><input type="number" name="songwriter_percent[]" min="0" max="100" required>%</td>
        </tr>
      </tbody>
    </table>
    <button type="button" onclick="addSongwriter()">Add Songwriter</button><br><br>

    <div id="publisher_div" style="display:none;">
      <label for="publisher_name">Publisher Name:</label>
      <input type="text" id="publisher_name" name="publisher_name"><br><br>
    </div>

    <label for="signature">Signature:</label>
    <input type="text" id="signature" name="signature" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <input type="submit" value="Generate Split Sheet">
  </form>

  <script>
    function togglePublisher() {
      var status = document.getElementById("song_status").value;
      if (status === "Released") {
        document.getElementById("publisher_div").style.display = "block";
      } else {
        document.getElementById("publisher_div").style.display = "none";
      }
    }

    function addSongwriter() {
      var table = document.getElementById("songwriter_table_body");
      var row = table.insertRow();
      var nameCell = row.insertCell(0);
      var percentCell = row.insertCell(1);
      nameCell.innerHTML = '<input type="text" name="songwriter_name[]" required>';
      percentCell.innerHTML = '<input type="number" name="songwriter_percent[]" min="0" max="100" required>%';
    }
  </script>
</body>
</html>
