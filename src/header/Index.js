import * as React from 'react';
import Table from '@mui/joy/Table';
import {useState, useEffect} from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
 
function Index(){
    //// CALL API //////
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then(json=> setData(json))
        .catch(error=>console.log(error))
    },[]);
console.log(data)
    //// HIT API ////
    return(
        <Box sx={{ width: '100%' }}>
        <Typography level="body-sm" textAlign="center" sx={{ pb: 2 }}>
          ← Scroll direction →
        </Typography>
        <Sheet
          variant="outlined"
          sx={{
            '--TableCell-height': '40px',
            // the number is the amount of the header rows.
            '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
            '--Table-firstColumnWidth': '80px',
            '--Table-lastColumnWidth': '144px',
            // background needs to have transparency to show the scrolling shadows
            '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
            '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
            overflow: 'auto',
            background: (
              theme,
            ) => `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
              linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
              radial-gradient(
                farthest-side at 0 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                  farthest-side at 100% 50%,
                  rgba(0, 0, 0, 0.12),
                  rgba(0, 0, 0, 0)
                )
                0 100%`,
            backgroundSize:
              '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'local, local, scroll, scroll',
            backgroundPosition:
              'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
            backgroundColor: 'background.surface',
          }}
        >
          <Table
            borderAxis="bothBetween"
            stripe="odd"
            hoverRow
            sx={{
              '& tr > *:first-child': {
                position: 'sticky',
                left: 0,
                boxShadow: '1px 0 var(--TableCell-borderColor)',
                bgcolor: 'background.surface',
              },
              '& tr > *:last-child': {
                position: 'sticky',
                right: 0,
                bgcolor: 'var(--TableCell-headBackground)',
              },
            }}
          >
            <thead>
              <tr>
               
                <th style={{ width: 2}}>ID</th>
                <th style={{ width: 200 }}>Title&nbsp;(g)</th>
                <th style={{ width: 20 }}>Completed&nbsp;(g)</th>
                <th
                  aria-label="last"
                  style={{ width: 'var(--Table-lastColumnWidth)' }}
                />
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.userid}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.completed}</td>
                  <td>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button size="sm" variant="plain" color="neutral">
                        Edit
                      </Button>
                      <Button size="sm" variant="soft" color="danger">
                        Delete
                      </Button>
                    </Box>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Box>
          );
        }

export default Index;