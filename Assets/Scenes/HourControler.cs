using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;

public class HourControler : MonoBehaviour
{
    public Text hourText;
    private string url = "localhost:8080";
    private string actualHour;

    void Start()
    {
        StartCoroutine(Get(url));
    }

    public void SetHour()
    {
        StartCoroutine(Get(url));
        hourText.text = actualHour;
    }

    public IEnumerator Get(string url)
    {
        using (UnityWebRequest www = UnityWebRequest.Get(url))
        {
            yield return www.SendWebRequest();

            if (www.isNetworkError || www.isHttpError)
            {
                Debug.Log(www.error);
            }
            else
            {
                if (www.isDone)
                {
                    // handle the result
                    var result = System.Text.Encoding.UTF8.GetString(www.downloadHandler.data);
                    actualHour = result;
                }
                else
                {
                    //handle the problem
                    Debug.Log("Error! can't get service.");
                }
            }
        }
    }

}
